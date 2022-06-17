const formatSitemapDate = (date) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? `0${minutes}` : minutes
  let strTime = `at ${hours}:${minutes} ${ampm}`
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()} ${strTime}`
}

module.exports = formatSitemapDate
