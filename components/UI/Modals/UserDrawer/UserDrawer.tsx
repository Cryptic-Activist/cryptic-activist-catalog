import React, { FC } from "react";
import { connect, useDispatch } from "react-redux";
import Link from "next/link";
import _ from "lodash";

import {
  Background,
  DrawerDiv,
  List,
  ListItem,
  LogoutButton,
} from "../../../../styles/components/UI/Modals/UserDrawer/UserDrawer";

import { logoutUser } from "../../../../store/actions/user/user";
import { clearLink } from "../../../../store/actions/link/link";
import { clearLinks } from "../../../../store/actions/links/links";

interface UserDrawerProps {
  openUserModal: boolean;
  openUserDrawer: boolean;
  handleToggleUserModalForm: () => void;
  handleCloseUserDrawer: () => void;
  user: {
    data: object;
    loading: boolean;
    fetched: boolean;
    error: boolean;
  };
}

const mapStateToProps = (state) => {
  const { user } = state;

  return {
    user,
  };
};

const UserDrawer: FC<UserDrawerProps> = ({
  openUserModal,
  openUserDrawer,
  handleCloseUserDrawer,
  handleToggleUserModalForm,
  user,
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
                <ListItem onClick={() => handleToggleUserModalForm()}>
                  Account
                </ListItem>
              </Link>
              <Link href="/" as="/">
                <ListItem onClick={() => handleToggleUserModalForm()}>
                  Home
                </ListItem>
              </Link>
              <Link href="/buyers" as="/buyers">
                <ListItem onClick={() => handleToggleUserModalForm()}>
                  Buyers
                </ListItem>
              </Link>
              <Link href="/sellers" as="/sellers">
                <ListItem onClick={() => handleToggleUserModalForm()}>
                  Sellers
                </ListItem>
              </Link>
            </List>
            {!_.isEmpty(user.data) &&
              !user.loading &&
              !user.error &&
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
