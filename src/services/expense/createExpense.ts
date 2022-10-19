import api from "..";
import { ICreateExpense } from "../../screens/NewExpenses/@types";
import { ISingleExpense } from "./@types";

const createExpense = async (payload: ICreateExpense) => {
  return await api.post<ISingleExpense>("/expense", payload)
}

export default createExpense
