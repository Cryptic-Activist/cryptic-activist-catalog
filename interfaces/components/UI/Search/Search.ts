import { IApp } from '../../../store/reducers/reducers';

export interface IFindOffers {
  borderColor: string;
  filters: boolean;
  app: IApp;
}

export interface IFilter {
  statement: string;
  type: 'payment-method' | 'tags' | 'trade-limit';
  insertIntoSearchFilterString: Function;
}
