/**
 * TODO: criar aqui uma classe contendo todas as operações que a conta irá possuir
 * 1. deposit
 * 2. withdraw
 * 3. transfer...
 */

export interface AccountProps { "id": string, "balance": number }

export class AccountsServices {
    public accounts: AccountProps[] = [];

    getAccountById(account_id: string) {
        let result = this.accounts.filter(el => el.id == account_id)
        if (!!result.length) {
            return { success: true, balance: result[0].balance }
        } else {
            return { success: false, balance: 0, err: "Id not found." }
        }
    }

    create(account_id: string, amount: number = 0) {
        this.accounts.push({ id: account_id, balance: amount })
    }

    update(update: AccountProps) {
        // todo : to see the EventsServices comments
    }
}