import React, { useEffect, FC } from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import _ from 'lodash';
import { FaBars } from 'react-icons/fa';

import {
  Navbar,
  Container,
  BrandDiv,
  Menu,
  MenuItem,
  LoginButton,
  LoadingDiv,
  UserButton,
  DrawerButton
} from '../../../styles/components/UI/NavigationBar/NavigationBar';

import LoginForm from '../Modals/LoginForm/LoginForm';
import RegisterForm from '../Modals/RegisterForm/RegisterForm';
import ResetPasswordForm from '../Modals/ResetPasswordForm/ResetPasswordForm';
import UserModal from '../Modals/UserModal/UserModal';
import UserDrawer from '../Modals/UserDrawer/UserDrawer';
import VerifyAccount from '../Modals/VerifyAccount/VerifyAccount';

import { IStateToPropUser } from '../../../interfaces/components/UI/NavigationBar/NavigationBar';

import {
  closeLoginForm,
  closeRegisterForm,
  closeResetPasswordForm,
  closeUserDrawer,
  closeUserModal,
  openLoginForm,
  openRegisterForm,
  openResetPasswordForm,
  openUserDrawer,
  toggleLoginForm,
  toggleRegisterForm,
  toggleResetPasswordForm,
  toggleUserModal,
  closeVerifyAccount,
  openVerifyAccount
} from '../../../store/actions/navbar/navbar';

const mapStateToProps = (state: IStateToPropUser) => {
  const { user, app, navbar } = state;
  return {
    user,
    app,
    navbar
  };
};

const NavigationBar: FC<IStateToPropUser> = ({ user, app, navbar }) => {
  const dispatch = useDispatch();

  const handleToggleLoginForm = () => {
    dispatch(toggleLoginForm(navbar.openLoginForm));
  };

  const handleOpenUserDrawer = () => {
    dispatch(openUserDrawer());
  };

  const handleCloseUserDrawer = () => {
    dispatch(closeUserDrawer());
  };

  const handleToggleRegisterForm = () => {
    dispatch(toggleRegisterForm(navbar.openRegisterForm));
  };

  const handleToggleResetPasswordForm = () => {
    dispatch(toggleResetPasswordForm(navbar.openResetPasswordForm));
  };

  const handleToggleUserModalForm = () => {
    dispatch(toggleUserModal(navbar.openUserModal));
  };

  const handleOpenLoginForm = () => {
    dispatch(openLoginForm());
    dispatch(closeRegisterForm());
    dispatch(closeResetPasswordForm());
  };

  const handleOpenRegisterForm = () => {
    dispatch(closeLoginForm());
    dispatch(openRegisterForm());
    dispatch(closeResetPasswordForm());
  };

  const handleOpenResetPasswordForm = () => {
    dispatch(closeLoginForm());
    dispatch(closeRegisterForm());
    dispatch(openResetPasswordForm());
  };

  const handleOpenVerifyAccount = () => {
    dispatch(closeLoginForm());
    dispatch(closeRegisterForm());
    dispatch(closeResetPasswordForm());
    dispatch(openVerifyAccount());
  };
  const handleCloseVerifyAccount = () => {
    dispatch(closeLoginForm());
    dispatch(closeRegisterForm());
    dispatch(closeResetPasswordForm());
    dispatch(closeVerifyAccount());
  };
  const closeAllForms = () => {
    dispatch(closeLoginForm());
    dispatch(closeRegisterForm());
    dispatch(closeResetPasswordForm());
    dispatch(closeUserModal());
  };

  return (
    <>
      {_.isEmpty(user.data) && (
        <>
          {navbar.openLoginForm && (
            <LoginForm
              handleToggleLoginForm={handleToggleLoginForm}
              handleOpenRegisterForm={handleOpenRegisterForm}
              handleOpenResetPasswordForm={handleOpenResetPasswordForm}
              handleOpenVerifyAccount={handleOpenVerifyAccount}
            />
          )}
          {navbar.openRegisterForm && (
            <RegisterForm
              handleOpenLoginForm={handleOpenLoginForm}
              handleOpenResetPasswordForm={handleOpenResetPasswordForm}
              handleToggleRegisterForm={handleToggleRegisterForm}
            />
          )}
          {navbar.openResetPasswordForm && (
            <ResetPasswordForm
              handleOpenLoginForm={handleOpenLoginForm}
              handleToggleResetPasswordForm={handleToggleResetPasswordForm}
            />
          )}
          {navbar.openVerifyAccount && (
            <VerifyAccount
              handleCloseVerifyAccount={handleCloseVerifyAccount}
            />
          )}
        </>
      )}
      <Navbar>
        <Container>
          <Link href="/" as="/">
            <BrandDiv>
              <h1>Cryptic Activist</h1>
              <h2>Catalog</h2>
            </BrandDiv>
          </Link>
          <div>
            {app.isMobile ? (
              <>
                <DrawerButton onClick={() => handleOpenUserDrawer()}>
                  <FaBars />
                </DrawerButton>
                {app.isMobile && (
                  <UserDrawer
                    openUserModal={navbar.openUserModal}
                    openUserDrawer={navbar.openUserDrawer}
                    handleCloseUserDrawer={handleCloseUserDrawer}
                    handleToggleUserModalForm={handleToggleUserModalForm}
                  />
                )}
              </>
            ) : (
              <Menu>
                <Link href="/" as="/">
                  <MenuItem>Home</MenuItem>
                </Link>
                <Link href="/vendors" as="/vendors">
                  <MenuItem>Vendors</MenuItem>
                </Link>
                <Link href="/map" as="/map">
                  <MenuItem>Map</MenuItem>
                </Link>
                {!_.isEmpty(user.data) &&
                  !user.loading &&
                  user.errors.length === 0 &&
                  user.fetched && (
                    <UserButton onClick={() => handleToggleUserModalForm()}>
                      {user.data.names.first_name}
                    </UserButton>
                  )}
                {user.loading && <LoadingDiv>Loading</LoadingDiv>}
                {_.isEmpty(user.data) && !user.loading && (
                  <LoginButton onClick={() => handleOpenLoginForm()}>
                    Login
                  </LoginButton>
                )}
                {!_.isEmpty(user.data) &&
                  !user.loading &&
                  user.errors.length === 0 &&
                  user.fetched &&
                  !app.isMobile &&
                  navbar.openUserModal && <UserModal />}
              </Menu>
            )}
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default connect(mapStateToProps)(NavigationBar);
