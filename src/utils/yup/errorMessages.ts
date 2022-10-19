export const requiredMessage = (field: string) => {
  return `O campo "${field}" é obrigatório`;
};

export const typeErrorMessage = (field: string, type: string) => {
  return `${field} deve ter o tipo ${type}`
}

export const minMessage = (field: string, min: number) => {
  return `${field} deve ser maior que ${min}`;
};

export const nullErrorMessage = (field: string) => {
  return `${field} não pode ser um valor em branco`
}
