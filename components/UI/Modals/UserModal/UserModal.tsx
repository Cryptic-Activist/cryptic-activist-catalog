import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import {
  Wrapper,
  FlexList,
  FlexListItem,
  FlexListItemButton
} from '../../../../styles/components/UI/Modals/UserModal/UserModal';

import { logoutUser } from '../../../../store/actions/user/user';
import { clearLink } from '../../../../store/actions/link/link';
import { clearLinks } from '../../../../store/actions/links/links';

const UserModal = () => {
  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    dispatch(clearLink());
    dispatch(clearLinks());
  };

  return (
    <Wrapper>
      <FlexList>
        <Link href="/account" as="/account">
          <FlexListItem>Account</FlexListItem>
        </Link>
        <FlexListItemButton onClick={() => handleLogoutUser()}>
          Sign out
        </FlexListItemButton>
      </FlexList>
    </Wrapper>
  );
};

export default UserModal;
