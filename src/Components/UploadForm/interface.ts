export interface IProps {
  uploadedFiles: string[];
  fetchUploadedFiles: () => {};
}

export interface IState {
  isPreviewVisible: boolean;
}
