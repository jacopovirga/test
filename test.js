function calculateDaysBetweenDates(date1, date2) {
  const difference = date2.getTime() - date1.getTime()
  return Math.floor(difference / (1000 * 3600 * 24))
}

//return the current time
function getCurrentTime() {
