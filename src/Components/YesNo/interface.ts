import { IYesNO, IFibo } from "../../Store/interface";

export interface IProps {
  yesno: IYesNO;
  fetchYesNo: Function;
  fiboSetCount: Function;
  fibo: IFibo;
  sqr?: number;
  isReselectionOn: boolean;
}

export interface IState {
  fiboCount: string;
}
