import moment from "moment";

export function getDate(miliseconds) {
  return moment(miliseconds).format('DD MMM YYYY')
}
