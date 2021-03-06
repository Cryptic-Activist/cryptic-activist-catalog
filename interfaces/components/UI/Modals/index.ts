import { IApp, IUser } from '../../../store/reducers/reducers';

export interface IRegistrationFormProps {
  handleOpenLoginForm: () => void;
  handleOpenResetPasswordForm: () => void;
  handleToggleRegisterForm: () => void;
  app: IApp;
}

export interface IUserDrawer {
  openUserModal: boolean;
  openUserDrawer: boolean;
  handleToggleUserModalForm: () => void;
  handleCloseUserDrawer: () => void;
  user: IUser;
}
