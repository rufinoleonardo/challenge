import { accountsServices } from "../controllers/AccountsControllers";
import { AccountProps } from "./AccountServices";

enum TRANSACTION {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    TRANSFER = "transfer"
}

export interface EventProps {
    type: TRANSACTION,
    origin?: string,
    destination?: string,
    amount: number
}

export class EventsServices {
    accounts: AccountProps[];

    constructor(accounts: AccountProps[]) {
        this.accounts = accounts
    }

    Reset() {
        this.accounts = [];
        accountsServices.accounts = [];
        console.log("Accouts now is a empty array.");
    }

    Deposit(id: string, amount: number) {
        const destinationAccount = this.accounts.find(account => account.id == id)
        if (!!destinationAccount) {
            destinationAccount.balance += amount;
            let updatedDestination = { id: destinationAccount.id, balance: destinationAccount.balance };

            return accountsServices.Update(updatedDestination)

        } else {
            let newAccount = accountsServices.Create(id, amount)
            this.accounts.push(newAccount)
            return newAccount
        }
    }

    Withdraw(id: string, amount: number) {
        const account = this.accounts.find(el => el.id == id)

        if (!!account) {
            console.log("account", account)
            account.balance -= amount;

            let updatedOrigin = { id: account.id, balance: account.balance };

            return accountsServices.Update(updatedOrigin);
        } else {
            return undefined;
        }
    }

    Transfer(OriginId: string, DestinationId: string, amount: number) {
        const originFinalValue = this.Withdraw(OriginId, amount)
        if (originFinalValue != undefined) {
            const destinationFinalValue = this.Deposit(DestinationId, amount)

            return {
                origin: originFinalValue,
                destination: destinationFinalValue
            }
        } else {
            return undefined;
        }
    }
}