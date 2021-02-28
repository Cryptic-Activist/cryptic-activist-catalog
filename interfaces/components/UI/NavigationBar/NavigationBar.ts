import { IApp, IUser } from '../../../store/reducers/reducers';

export interface IStateToPropUser {
  user: IUser;
  app: IApp;
  navbar: {
    openLoginForm: boolean;
    openRegisterForm: boolean;
    openResetPasswordForm: boolean;
    openUserModal: boolean;
    openUserDrawer: boolean;
    openVerifyAccount: boolean;
  };
}
