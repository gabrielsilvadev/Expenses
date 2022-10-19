export type TExpenseStatus = "active" | "cancelled"

export type TExpense = {
  "color": string,
  "is_mine": boolean,
  "due_date": string,
  "id": number,
  "value": string,
  "paid": boolean,
  "status": TExpenseStatus,
  "total": string,
  "name": string
}
