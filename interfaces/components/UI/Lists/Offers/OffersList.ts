import { IApp } from '../../../../store/reducers/reducers';

export interface IOffersList {
  endpoint: string;
  limit: number;
  height: string;
  app: IApp;
}
