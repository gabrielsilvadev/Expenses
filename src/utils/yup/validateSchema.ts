import { ObjectSchema } from "yup";
import { ValidateOptions } from "yup/lib/types";

const DEFAULT_OPTIONS = {
  abortEarly: true,
};

function validateSchema(
  schema: ObjectSchema<any>,
  payload: unknown,
  options: ValidateOptions = DEFAULT_OPTIONS
) {
  try {
    schema.validateSync(payload, options);
    return;
  } catch (e) {
    const [error] = e.errors;
    return error;
  }
};

export default validateSchema;
