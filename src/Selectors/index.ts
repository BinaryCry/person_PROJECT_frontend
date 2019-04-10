import { IStore } from "store";

export const fiboCSelector = (state: IStore) => state.fibo.count;
