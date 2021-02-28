import React, { useState, useEffect, FC, ChangeEvent, FormEvent } from 'react';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FaSpinner, FaInfo } from 'react-icons/fa';

import Api from '../../../../services/api/index';

import Warnings from '../../Warnings/Warnings';
import PrivateKeysModal from '../PrivateKeys/PrivateKeys';

import {
  Background,
  FormDiv,
  Heading,
  Form,
  SplitDiv,
  Input,
  Label,
  Submit,
  Button,
  Loading,
  Required,
  SuccessP,
  InfoBtn
} from '../../../../styles/components/UI/Modals/LoginForm/LoginForm';

import { resetWarnings, setWarnings } from '../../../../store/actions/app/app';

import { IRegistrationFormProps } from '../../../../interfaces/components/UI/Modals';

interface RegisterUserProps {
  names: {
    firstName: string;
    lastName: string;
  };
  username: string;
  password: string;
  password2: string;
}

const mapStateToProps = ({ app }) => {
  return { app };
};

const RegisterForm: FC<IRegistrationFormProps> = ({
  handleOpenLoginForm,
  handleOpenResetPasswordForm,
  handleToggleRegisterForm,
  app
}) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const [togglePrivateKeys, setTogglePrivateKeys] = useState<boolean>(false);
  const [privateKeys, setPrivateKeys] = useState<null | string[]>(null);

  const dispatch = useDispatch();

  const api = new Api();

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
    async function getRandomCredentials() {
      const credentials = await api.get(
        `${process.env.USER_API_ENDPOINT}/user/get/random/credentials`
      );
      if (credentials.status_code === 200) {
        setFirstName(credentials.results.names[0]);
        setLastName(credentials.results.names[1]);
        setUsername(credentials.results.username);
      }
    }
    getRandomCredentials();
  }, []);

  function handleTogglePrivateKeysModal(): void {
    setTogglePrivateKeys(!togglePrivateKeys);
  }

  function onChangePassword(e: ChangeEvent<HTMLInputElement>): void {
    setPassword(e.target.value);
  }

  function onChangePassword2(e: ChangeEvent<HTMLInputElement>): void {
    setPassword2(e.target.value);
  }

  function checkValidForm(): boolean {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      username.length > 0 &&
      password.length > 0 &&
      password2.length > 0
    ) {
      resetWarningMessages();
      return true;
    } else {
      addWarningMessage('All fields must be filled');
      return false;
    }
  }

  function passwordMustMatch(): boolean {
    if (password === password2) {
      resetWarningMessages();
      return true;
    } else {
      addWarningMessage('Both passwords must match');
      return false;
    }
  }

  async function registerUser(
    userObj: RegisterUserProps
  ): Promise<{
    status_code: number;
    results: {};
    errors: string[];
  }> {
    console.log('userObj:', userObj);
    const res = await fetch(
      `${process.env.USER_API_ENDPOINT}/user/auth/register`,
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
      }
    );
    const data = await res.json();
    return data;
  }

  async function handleSubmitRegister(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    resetWarningMessages();
    if (checkValidForm() && passwordMustMatch()) {
      setLoading(true);
      const registrationResponse: any = await registerUser({
        names: {
          firstName,
          lastName
        },
        username,
        password,
        password2
      });

      if (registrationResponse.status_code === 201) {
        setPrivateKeys(registrationResponse.results.private_keys);
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          handleTogglePrivateKeysModal();
        }, 10000);
      } else {
        setLoading(false);
        registrationResponse.errors.forEach((error) => {
          addWarningMessage(error);
        });
      }
    }
  }

  return (
    <>
      {togglePrivateKeys && (
        <PrivateKeysModal
          privateKeys={privateKeys}
          handleTogglePrivateKeysModal={handleTogglePrivateKeysModal}
        />
      )}
      <Background onClick={() => handleToggleRegisterForm()} />
      <FormDiv>
        <Heading>| Register</Heading>
        {loading ? (
          <Loading>
            <FaSpinner />
          </Loading>
        ) : (
          <>
            {success ? (
              <SuccessP>
                The next step is crucial. Make sure to follow the next
                instructions since it won't able available anymore.
              </SuccessP>
            ) : (
              <Form onSubmit={(e) => handleSubmitRegister(e)}>
                <SplitDiv>
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Required>*</Required>
                    <Input
                      id="firstName"
                      type="text"
                      value={firstName}
                      disabled
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Required>*</Required>
                    <Input
                      id="lastName"
                      type="text"
                      value={lastName}
                      disabled
                    />
                  </div>
                </SplitDiv>
                <div>
                  <Label htmlFor="username">Username</Label>
                  <Required>*</Required>
                  <Input id="username" type="text" value={username} disabled />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Required>*</Required>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => onChangePassword(e)}
                  />
                </div>
                <div>
                  <Label htmlFor="password2">Confirm Password</Label>
                  <Required>*</Required>
                  <Input
                    id="password2"
                    type="password"
                    value={password2}
                    onChange={(e) => onChangePassword2(e)}
                  />
                </div>
                <Submit type="submit">Register</Submit>
                <div>
                  <Warnings
                    warning={app.warnings.length > 0}
                    warningMessages={app.warnings}
                  />
                  <Button
                    type="button"
                    onClick={() => handleOpenResetPasswordForm()}
                  >
                    Reset Password
                  </Button>
                  <Button type="button" onClick={() => handleOpenLoginForm()}>
                    Already have an account?
                  </Button>
                </div>
              </Form>
            )}
          </>
        )}
      </FormDiv>
    </>
  );
};

RegisterForm.propTypes = {
  handleOpenLoginForm: PropTypes.func.isRequired,
  handleOpenResetPasswordForm: PropTypes.func.isRequired,
  handleToggleRegisterForm: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(RegisterForm);
