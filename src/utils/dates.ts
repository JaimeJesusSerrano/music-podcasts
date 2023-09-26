export const formatDate = (date: string): string => {
  const currentDate = new Date(date)
  const month = '' + (currentDate.getMonth() + 1)
  const day = '' + currentDate.getDate()
  const year = currentDate.getFullYear()
  const hour = currentDate.getHours()
  const minutes = currentDate.getMinutes()
  const seconds = currentDate.getSeconds()

  return `${year}/${month}/${day} ${hour}:${minutes}${seconds}`
}

export default {
  formatDate,
}
