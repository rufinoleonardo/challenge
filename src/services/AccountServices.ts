/**
 * TODO: criar aqui uma classe contendo todas as operações que a conta irá possuir
 * 1. deposit
 * 2. withdraw
 * 3. transfer...
 */

export interface AccountProps { "id": string, "balance": number }

export class AccountsServices {
    public accounts: AccountProps[] = [];

    Create(id: string, amount: number = 0) {
        let newAccount = { id: id, balance: amount }
        this.accounts.push(newAccount)
        return newAccount
    }

    ReadAccountById(account_id: string) {
        let result = this.accounts.filter(el => el.id == account_id)
        if (!!result.length) {
            return { success: true, balance: result[0].balance }
        } else {
            return { success: false, balance: 0, err: "Id not found." }
        }
    }

    Update(account: AccountProps) {
        let updating = this.accounts.find(el => el.id == account.id)
        updating = account;

        return account;
    }
}