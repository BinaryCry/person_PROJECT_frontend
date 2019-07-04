import axios from "axios";

export const uploadFile = (formdata: FormData) =>
  axios.post("/api/upload", formdata, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    validateStatus: function(status) {
      return status >= 200 && status <= 526;
    }
  });

export const fetchUploadedFiles = () =>
  axios.get("/api/uploaded", {
    validateStatus: function(status) {
      return status >= 200 && status <= 526;
    }
  });
