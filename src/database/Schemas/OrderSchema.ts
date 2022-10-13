export const OrderSchema = {
  name: "Expenses",
  properties: {
    id: "string",
    label: "string",
    value: "number",
    color: "string",
    percent: "string",
    total: "string",
    created_at: "date",
  },

  primaryKey: "id",
};
