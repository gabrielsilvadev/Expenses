import { TResponse } from "../../@types/response";
import { TExpense } from "./expense";

export interface IMultipleExpensies extends TResponse {
  expensies: TExpense[]
}

export interface ISingleExpense extends TResponse {
  expense: TExpense
}
