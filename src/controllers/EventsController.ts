import { Router, Request, Response } from "express";
import { EventProps } from "../services/EventsServices";
import { EventsServices } from "../services/EventsServices";
import { accountsServices } from "./AccountsControllers";

const eventsRouter = Router();
let eventsServices = new EventsServices(accountsServices?.accounts)

eventsRouter.post("/", (req: Request, res: Response) => {
    const accountData: EventProps = req.body;
    /** {"type":"transfer", "origin":"100", "amount":15, "destination":"300"} */
    try {
        if (accountData.type == "deposit") {
            let resp = eventsServices.Deposit(accountData.destination as string, accountData.amount)

            return res.status(201).json({ "destination": resp })
        }
        else if (accountData.type == "withdraw") {
            let resp = eventsServices.Withdraw(accountData.origin as string, accountData.amount)

            if (resp != undefined) {
                return res.status(201).json({ "origin": resp })
            } else {
                return res.status(404).send("0")
            }
        }
        else if (accountData.type == "transfer") {
            let resp = eventsServices.Transfer(accountData.origin as string, accountData.destination as string, accountData.amount)

            if (resp != undefined) {
                return res.status(201).json(resp)
            } else {
                return res.status(404).send("0")
            }
        }
    } catch (err) {
        console.log(err)
    }

    console.log("Não entrou no if")
})

export { eventsRouter, eventsServices };