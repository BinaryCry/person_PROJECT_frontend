export interface IProps {
  uploadedFiles: string[];
  fetchUploadedFiles: () => {};
  uploadFile: (formData: FormData) => {};
}

export interface IState {
  isPreviewVisible: boolean;
}
