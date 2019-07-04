import * as React from "react";
import { IProps, IState } from "./interface";
import * as style from "./style.scss";

export default class UploadForm extends React.Component<IProps, IState> {
  imgPreviewElement: React.RefObject<HTMLImageElement> = React.createRef<
    HTMLImageElement
  >();
  inputImage: React.RefObject<HTMLInputElement> = React.createRef<
    HTMLInputElement
  >();

  constructor(props: IProps) {
    super(props);
    this.state = {
      isPreviewVisible: false
    };
    this._fileInputHandler = this._fileInputHandler.bind(this);
    this._formSubmitHandler = this._formSubmitHandler.bind(this);
  }

  componentDidMount() {
    this.props.fetchUploadedFiles();
  }

  private _fileInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (
      e.target.files &&
      e.target.files[0] &&
      e.target.files[0].type.match("image")
    ) {
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e: ProgressEvent & { target: { result: string } }) => {
        this.imgPreviewElement.current.setAttribute("src", e.target.result);
      };
      this.setState({ isPreviewVisible: true });
    } else {
      this.setState({ isPreviewVisible: false });
    }
  }

  private _formSubmitHandler(e: React.FormEvent) {
    e.preventDefault();
    if (this.state.isPreviewVisible) {
      const fileName = this.inputImage.current.files[0].name.slice(
        0,
        this.inputImage.current.files[0].name.lastIndexOf(".")
      );
      const formData = new FormData();
      formData.append(
        fileName,
        this.inputImage.current.files[0]
      );
      this.props.uploadFile(formData);
      this.inputImage.current.value = "";
      this.setState({ isPreviewVisible: false });
    }
  }

  render() {
    const { uploadedFiles } = this.props;
    return (
      <React.Fragment>
        {uploadedFiles.length > 0 && (
          <div className={style.fileList}>
            <div className={style.fileListTop}>Files:</div>
            {uploadedFiles.map((fileName: string, index: number) => (
              <div className={style.fileListItem} key={index + "_" + fileName}>
                > {fileName}
              </div>
            ))}
          </div>
        )}
        <form className={style.uploadForm} onSubmit={this._formSubmitHandler}>
          <input
            ref={this.inputImage}
            onChange={this._fileInputHandler}
            type="file"
          />
          <button type="submit">Upload</button>
        </form>
        {this.state.isPreviewVisible ? (
          <img className={style.preview} ref={this.imgPreviewElement} />
        ) : (
          <span className={style.previewText}>no preview</span>
        )}
      </React.Fragment>
    );
  }
}
