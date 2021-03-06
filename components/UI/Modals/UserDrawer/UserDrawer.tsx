import React, { FC } from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import _ from 'lodash';

import { IUserDrawer } from '../../../../interfaces/components/UI/Modals/index';

import {
  Background,
  DrawerDiv,
  List,
  ListItem,
  LogoutButton
} from '../../../../styles/components/UI/Modals/UserDrawer/UserDrawer';

import { logoutUser } from '../../../../store/actions/user/user';
import { clearLink } from '../../../../store/actions/link/link';
import { clearLinks } from '../../../../store/actions/links/links';

const mapStateToProps = ({ user }) => ({ user });

const UserDrawer: FC<IUserDrawer> = ({
  openUserModal,
  openUserDrawer,
  handleCloseUserDrawer,
  handleToggleUserModalForm,
  user
}) => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    dispatch(clearLink());
    dispatch(clearLinks());
  };

  return (
    <>
      {openUserDrawer && (
        <>
          <Background
            openUserModal={openUserModal}
            onClick={() => handleCloseUserDrawer()}
          />
          <DrawerDiv openUserModal={openUserModal}>
            <List>
              <Link href="/account" as="/account">
                <ListItem
                  onClick={() => {
                    handleCloseUserDrawer();
                    handleToggleUserModalForm();
                  }}
                >
                  Account
                </ListItem>
              </Link>
              <Link href="/" as="/">
                <ListItem
                  onClick={() => {
                    handleCloseUserDrawer();
                    handleToggleUserModalForm();
                  }}
                >
                  Home
                </ListItem>
              </Link>
              <Link href="/vendors" as="/vendors">
                <ListItem
                  onClick={() => {
                    handleCloseUserDrawer();
                    handleToggleUserModalForm();
                  }}
                >
                  Vendors
                </ListItem>
              </Link>
              <Link href="/map" as="/map">
                <ListItem
                  onClick={() => {
                    handleCloseUserDrawer();
                    handleToggleUserModalForm();
                  }}
                >
                  Map
                </ListItem>
              </Link>
            </List>
            {Object.entries(user.data).length > 0 &&
              !user.loading &&
              user.errors.length === 0 &&
              user.fetched && (
                <LogoutButton onClick={() => handleLogoutUser()}>
                  Log out
                </LogoutButton>
              )}
          </DrawerDiv>
        </>
      )}
    </>
  );
};

export default connect(mapStateToProps)(UserDrawer);
