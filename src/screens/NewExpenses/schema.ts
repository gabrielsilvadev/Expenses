import * as Yup from "yup"

import { minMessage, nullErrorMessage, requiredMessage, typeErrorMessage } from "../../utils/yup/errorMessages"

const createExpenseSchema = Yup.object().shape({
  color: Yup.string().required(requiredMessage("Cor")).typeError(nullErrorMessage("Cor")),
  name: Yup.string().required(requiredMessage("Descrição")),
  value: Yup.number()
    .required(requiredMessage("Valor"))
    .min(0.000000001, minMessage("Valor", 0))
    .typeError(typeErrorMessage("Valor", "numerico")),
  due_date: Yup.string().required(requiredMessage("Valor")),
  is_mine: Yup.boolean().required(requiredMessage("É meu")),
  paid: Yup.boolean().required(requiredMessage("Está pago?")),
})

export default createExpenseSchema
