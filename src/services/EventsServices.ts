import { AccountProps } from "./AccountServices";

enum TRANSACTION {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    TRANSFER = "transfer"
}

interface EventProps { "type": TRANSACTION, "destination": string, "amount": number }

class EventsServices {
    public accounts: AccountProps[];

    Deposit(id: string, amount: number) {
        const destinationAccount = this.accounts.find(account => account.id == id)
        if (!!destinationAccount) {
            const finalValue = destinationAccount.balance += amount;
            return { id: destinationAccount.balance, balance: destinationAccount.balance };
        }
    }

    Withdraw(id: string, amount: number) {
        const account = this.accounts.find(el => el.id == id)
        if (!!account) {
            const finalValue = account.balance -= amount;
            return { id: account.balance, balance: account.balance };
        }
    }

    Transfer(OriginAccount: string, DestinationAccount: string, amount: number) {


        //todo: return a array with two objects: the OriginAccount and the DestinationAccount.
    }
}