import { IApp } from '../../../store/reducers/reducers';

export interface IRegistrationFormProps {
  handleOpenLoginForm: () => void;
  handleOpenResetPasswordForm: () => void;
  handleToggleRegisterForm: () => void;
  app: IApp;
}
