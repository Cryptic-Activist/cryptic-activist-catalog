import React, { FC, useEffect } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';

import { IUser } from '../interfaces/store/reducers/reducers';

const mapStateToProps = ({ user }) => ({ user });

const Profile: FC<any> = ({ user }) => {
  useEffect(() => {
    if (Object.entries(user.data).length === 0) {
      Router.push('/');
    }
  }, [user.data]);

  console.log('user:', user);

  return (
    <div>
      <h1>{user.data.names.first_name}</h1>
    </div>
  );
};

export default connect(mapStateToProps)(Profile);
