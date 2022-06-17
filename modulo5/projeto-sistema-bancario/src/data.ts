export enum Transaction {
    PAYMENT = 'Payment',
    DEPOSIT = 'Deposit'
}

export type account = {
    name: string,
    CPF: number,
    dateOfBirth: string,
    balance: number,
    bankStatement: balance[]
}

type balance = {
    transaction: Transaction,
    value: number,
    date: string,
    description: string
}

export const bankUsers: Account[] = [
    {
      id:"1",
      name:"Edson",
      cpf: Math.random(),
      dateOfBirth: "13/01/1994",
      balance: 0,
      bankStatement: [{ value: 0, date: "", description: "" }],
    },
    {
      id:"2",
      name: "João",
      cpf: Math.random(),
      dateOfBirth: "20/03/2000",
      balance: 0,
      bankStatement: [{ value: 0, date: "", description: "" }],
    },
    {
      id:"3",
      name: "Monica",
      cpf:Math.random(),
      dateOfBirth: "19/07/1988",
      balance: 0,
      bankStatement: [{ value: 0, date: "", description: "" }],
    },
  ];