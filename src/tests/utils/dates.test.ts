import { formatDate, getHourFormatByMilliseconds } from 'utils/dates'

describe('[Utils] dates formatDate', () => {
  it('Empty prop value', async () => {
    expect(formatDate()).toBe('')
  })

  it('Invalid value', async () => {
    const date = '20230926T10:36:00'
    expect(formatDate(date)).toBe('NaN/NaN/NaN NaN:NaN:NaN')
  })

  it('Valid value', async () => {
    const date = '2023-09-26T10:36:00Z'
    expect(formatDate(date)).toBe('2023/9/26 12:36:00')
  })
})

describe('[Utils] dates getHourFormatByMilliseconds', () => {
  it('Empty prop value', async () => {
    expect(getHourFormatByMilliseconds()).toBe('')
  })

  it('Zero value', async () => {
    expect(getHourFormatByMilliseconds(0)).toBe('0:00:00')
  })

  it('Less than 1 second', async () => {
    expect(getHourFormatByMilliseconds(999)).toBe('0:00:00')
  })

  it('Between 1 second and 59 seconds', async () => {
    expect(getHourFormatByMilliseconds(6000)).toBe('0:00:06')
    expect(getHourFormatByMilliseconds(12000)).toBe('0:00:12')
  })

  it('Between 1 minute and 59 minutes', async () => {
    expect(getHourFormatByMilliseconds(365000)).toBe('0:06:05')
    expect(getHourFormatByMilliseconds(3024000)).toBe('0:50:24')
  })

  it('More than 1 hour', async () => {
    expect(getHourFormatByMilliseconds(3800000)).toBe('1:03:20')
  })
})
