import { Router, Request, Response } from "express";
import { EventProps } from "../services/EventsServices";
import { EventsServices } from "../services/EventsServices";
import { accountsServices } from "./AccountsControllers";

const eventsRouter = Router();
let eventsServices = new EventsServices(accountsServices.accounts)

eventsRouter.post("/", (req: Request, res: Response) => {
    const accountData: EventProps = req.body;
    /** {"type":"transfer", "origin":"100", "amount":15, "destination":"300"} */
    try {
        if (accountData.type == "deposit") {
            let resp = eventsServices.Deposit(accountData.destination as string, accountData.amount)

            return res.status(201).json({ "destination": resp })
        }
    } catch (err) {
        console.log(err)
    }

    console.log("Não entrou no if")
})

export { eventsRouter, eventsServices };