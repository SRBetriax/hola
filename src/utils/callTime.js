import moment from "moment/moment";
import { getDate } from "./localStorage";

export const callTime = () => {
  const lastDate = getDate();

  futureDate()
  if (!Date.parse(lastDate) < Date.parse(new Date())) return false;
  return true;
}

export const futureDate = () => {
  const date = new Date();
  return moment(date).add(12, 'h').local().toDate();
}
