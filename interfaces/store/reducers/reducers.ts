export interface IApp {
  isMobile: boolean;
  dimensions: number[];
  warnings: string[];
  type: number;
}

export interface IUser {
  data: {
    id: number;
    username: string;
    is_verified: boolean;
    created_at: string;
    updated_at: null | string;
    names: {
      first_name: string;
      last_name: string;
    };
  };
  loading: boolean;
  fetched: boolean;
  errors: string[];
}
