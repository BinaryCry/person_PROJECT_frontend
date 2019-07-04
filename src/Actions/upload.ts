import { FETCH_UPLOADED_FILES, UPLOAD_FILE } from "../Constants/actionTypes";
import { ActionCreator } from "redux";

export const fetchUploadedFilesAction: ActionCreator<{
  type: string;
}> = () => ({
  type: FETCH_UPLOADED_FILES
});

export const uploadFile: ActionCreator<{
  type: string;
  formData: FormData;
}> = (formData: FormData) => ({
  type: UPLOAD_FILE,
  formData
});
