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
        console.log("Accouts now is a empty array.");
    }

    Deposit(id: string, amount: number) {
        const destinationAccount = this.accounts.find(account => account.id == id)
        if (!!destinationAccount) {
            const finalValue = destinationAccount.balance += amount;
            return { id: destinationAccount.id, balance: destinationAccount.balance };
        } else {
            this.accounts.push({ id: id, balance: amount })
            return { "id": id, "balance": amount }
        }
    }

    Withdraw(id: string, amount: number) {
        const account = this.accounts.find(el => el.id == id)
        if (!!account) {
            const finalValue = account.balance -= amount;
            return { id: account.balance, balance: account.balance };
        }
    }

    Transfer(OriginAccount: AccountProps, DestinationAccount: AccountProps, amount: number) {
        OriginAccount.balance -= amount;
        DestinationAccount.balance += amount;

        console.log(OriginAccount, DestinationAccount)

        //todo: return a array with two objects: the OriginAccount and the DestinationAccount.
    }
}