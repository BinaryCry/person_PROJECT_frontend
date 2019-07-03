import axios from "axios";

export const uploadFile = (formdata: FormData) =>
  axios
    .post("/api/upload", formdata, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .catch(err => console.log(err));

export const fetchUploadedFiles = () =>
  axios.get("/api/uploaded", {
    validateStatus: function(status) {
      return status >= 200 && status <= 526;
    }
  });
