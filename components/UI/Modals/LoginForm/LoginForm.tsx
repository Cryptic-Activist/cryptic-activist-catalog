import React, { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import { useDispatch, connect } from 'react-redux';

import Warnings from '../../Warnings/Warnings';

import {
  Background,
  FormDiv,
  Heading,
  Form,
  Input,
  Label,
  Submit,
  Button
} from '../../../../styles/components/UI/Modals/LoginForm/LoginForm';

import { loginUser } from '../../../../store/actions/user/user';
import { resetWarnings, setWarnings } from '../../../../store/actions/app/app';

import { ILoginFormProps } from '../../../../interfaces/components/UI/Modals/Modals';

const mapStateToProps = ({ user, app }) => {
  return { user, app };
};

const LoginForm: FC<ILoginFormProps> = ({
  handleToggleLoginForm,
  handleOpenRegisterForm,
  handleOpenResetPasswordForm,
  handleOpenVerifyAccount,
  user,
  app
}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  function resetWarningMessages(): void {
    dispatch(resetWarnings());
  }

  function addWarningMessage(message: string): void {
    dispatch(setWarnings(message));
  }

  useEffect(() => {
    dispatch(resetWarnings());
  }, []);

  useEffect(() => {
    if (user.errors.length > 0) {
      user.errors.forEach((error: string) => {
        addWarningMessage(error);
      });
    } else {
      resetWarningMessages();
    }
  }, [user]);

  function onChangeUsername(e: ChangeEvent<HTMLInputElement>): void {
    setUsername(e.target.value);
  }

  function onChangePassword(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }

  function checkValidForm(): boolean {
    if (username.length > 0 && password.length > 0) {
      resetWarningMessages();
      return true;
    } else {
      addWarningMessage('All fields must be filled');
      return false;
    }
  }

  function handleSubmitLogin(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    resetWarningMessages();
    if (checkValidForm()) {
      dispatch(loginUser({ username, password }));
    }
  }

  return (
    <>
      <Background onClick={(): void => handleToggleLoginForm()} />
      <FormDiv>
        <Heading>| Login</Heading>
        <Form
          onSubmit={(e: FormEvent<HTMLFormElement>): void =>
            handleSubmitLogin(e)
          }
        >
          <div>
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                onChangeUsername(e)
              }
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                onChangePassword(e)
              }
            />
          </div>
          <Submit type="submit">Login</Submit>
          <div>
            <Warnings
              warning={app.warnings.length > 0}
              warningMessages={app.warnings}
            />
            <Button
              type="button"
              onClick={(): void => handleOpenResetPasswordForm()}
            >
              Reset Password
            </Button>
            <Button
              type="button"
              onClick={(): void => handleOpenRegisterForm()}
            >
              Don't have an account yet?
            </Button>
            <Button type="button" onClick={() => handleOpenVerifyAccount()}>
              Verify an account
            </Button>
          </div>
        </Form>
      </FormDiv>
    </>
  );
};

export default connect(mapStateToProps)(LoginForm);
