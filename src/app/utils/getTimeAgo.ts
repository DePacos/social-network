export const timeAgo = (date: Date) => {
  const diff = (Date.now() - date.getTime()) / 1000

  const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
    style: 'long',
  })

  const units: { name: Intl.RelativeTimeFormatUnit; seconds: number }[] = [
    { name: 'year', seconds: 31_536_000 },
    { name: 'month', seconds: 2_592_000 },
    { name: 'day', seconds: 86_400 },
    { name: 'hour', seconds: 3600 },
    { name: 'minute', seconds: 60 },
    { name: 'second', seconds: 1 },
  ]

  for (const unit of units) {
    const value = Math.floor(diff / unit.seconds)

    if (value >= 1) {
      return formatter.format(value * -1, unit.name)
    }
  }

  return 'just'
}
