import { Router, Request, Response } from "express";
import { accountsServices } from "./AccountsControllers";
import { eventsServices } from "./EventsController";

const resetRouter = Router();

resetRouter.post("/", (req: Request, res: Response) => {
    // TODO: zerar o Objeto instanciado.
    eventsServices.Reset();
    res.status(200).send("OK")
})

export { resetRouter };