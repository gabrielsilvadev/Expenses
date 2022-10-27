export function generateMonthDate(month) {
  const toDay = new Date()
  return `${toDay.getFullYear()}-${month}-01`
}
