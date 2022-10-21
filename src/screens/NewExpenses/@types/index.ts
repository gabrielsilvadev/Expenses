export interface ICreateExpense {
  name: string
  value: string
  due_date: string
  is_mine: boolean
  paid: boolean
  profile_id: number
  color: string
}
