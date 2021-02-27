export interface IApp {
  isMobile: boolean;
  dimensions: number[];
  warnings: string[];
  type: number;
}

export interface IUser {
  data: {
    id: number;
    email: string;
    username: string;
    password: string;
    is_verified: boolean;
    created_at: Date;
    updated_at: null | Date;
    names: {
      id: number;
      user_id: number;
      first_name: string;
      last_name: string;
      created_at: Date;
      updated_at: null | Date;
    };
    deletion: {
      id: number;
      user_id: number;
      is_deleted: boolean;
      when: null | Date;
      created_at: Date;
      updated_at: null | Date;
    };
  };
  loading: boolean;
  fetched: boolean;
  errors: string[];
}
