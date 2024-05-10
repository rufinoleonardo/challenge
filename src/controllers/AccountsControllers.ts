import { Router, Request, Response } from "express";
import { AccountsServices } from "../services/AccountServices";

const accountsRouter = Router();
const accountsServices = new AccountsServices()

accountsRouter.get("/", (req: Request, res: Response) => {
    let id = req.query.account_id

    console.log(accountsServices.accounts)

    let resp = 0;
    let responseCode = 404;

    let wantedItem = accountsServices.accounts.filter(account => account.id == id)

    if (wantedItem.length > 0) {
        resp = wantedItem[0].balance;
        responseCode = 200
    }

    res.status(responseCode).send(resp.toString())
})

export { accountsRouter, accountsServices };