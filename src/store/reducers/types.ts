export interface IAction<T> {
  type: string;
  payload: {
    list: Array<T>;
    single: T;
  };
}
