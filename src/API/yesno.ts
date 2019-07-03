import axios from "axios";

export const fetchYesNo = () =>
  axios
    .get("https://yesno.wtf/api")
    .catch(err => console.log(err));
