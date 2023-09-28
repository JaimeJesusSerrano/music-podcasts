export const getHourFormatByMilliseconds = (milliseconds?: number): string => {
  if (milliseconds === 0) return '0:00:00'
  if (!milliseconds) return ''

  let seconds = Math.trunc(milliseconds / 1000)
  let minutes = Math.trunc(seconds / 60)
  const hours = Math.trunc(minutes / 60)

  seconds = seconds % 60
  const secondsFormatted = seconds < 10 ? `0${seconds.toFixed(0)}` : `${seconds.toFixed(0)}`

  minutes = minutes % 60
  const minutesFormatted = minutes < 10 ? `0${minutes.toFixed(0)}` : `${minutes.toFixed(0)}`

  const hoursFormatted = hours.toFixed(0)

  return `${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`
}

export const formatDate = (date?: string): string => {
  if (!date) return ''

  try {
    const currentDate = new Date(date)
    const month = `${currentDate.getMonth() + 1}`
    const day = `${currentDate.getDate()}`
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const secondsFormatted = seconds < 10 ? `0${seconds.toFixed(0)}` : `${seconds.toFixed(0)}`
    const minutesFormatted = minutes < 10 ? `0${minutes.toFixed(0)}` : `${minutes.toFixed(0)}`
    const hoursFormatted = hours < 10 ? `0${hours.toFixed(0)}` : `${hours.toFixed(0)}`

    return `${year}/${month}/${day} ${hoursFormatted}:${minutesFormatted}:${secondsFormatted}`
  } catch (e) {
    return ''
  }
}

export default {
  getHourFormatByMilliseconds,
  formatDate,
}
