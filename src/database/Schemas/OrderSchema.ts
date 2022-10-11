export const OrderSchema = {
  name: "expenses",
  properties: {
    id: "string",
    label: "string",
    value: "number",
    color: "string",
    percent: "string",
    created_at: "date",
  },

  primaryKey: "id",
};
