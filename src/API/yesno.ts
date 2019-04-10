import axios from "axios";

export const fetchYesNo = () =>
  axios
    .get("https://yesno.wtf/api")
    .then(response => response)
    .catch(error => error.response);
