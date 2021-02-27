import React, { useState, useEffect, useLayoutEffect, FC } from 'react';
import { connect, useDispatch } from 'react-redux';

import NavigationBar from './UI/NavigationBar/NavigationBar';
import Footer from './UI/Footer/Footer';

import { LayoutDiv } from '../styles/components/Layout';

import { decodeAccessToken } from '../store/actions/user/user';
import { getDimensions, setIsMobile } from '../store/actions/app/app';

import GlobalStyle from '../styles/global';

let count: number = 0;

interface stateProps {
  user: {
    data: object;
    loading: boolean;
    fetched: boolean;
    error: boolean;
  };
  app: {
    isMoblie: boolean;
    dimensions: {
      width: number;
      height: number;
    };
    theme: {
      title: string;

      colors: {
        primary: string;
        secondary: string;

        background: string;
        text: string;

        switchers: {
          text: string;
          icon: string;

          background: string;
          border: string;
        };
      };
    };
  };
  navbar: {
    openLoginForm: boolean;
    openRegisterForm: boolean;
    openResetPasswiordForm: boolean;
    openUserModal: boolean;
    openUserDrawer: boolean;
  };
}

interface LayoutProps {
  children: Element;
  user: {
    data: object;
    loading: boolean;
    fetched: boolean;
    error: boolean;
  };
  app: {
    isMoblie: boolean;
    dimensions: {
      width: number;
      height: number;
    };
    theme: {
      title: string;

      colors: {
        primary: string;
        secondary: string;

        background: string;
        text: string;

        switchers: {
          text: string;
          icon: string;

          background: string;
          border: string;
        };
      };
    };
  };
  navbar: {
    openLoginForm: boolean;
    openRegisterForm: boolean;
    openResetPasswiordForm: boolean;
    openUserModal: boolean;
    openUserDrawer: boolean;
  };
  setThemeColor: (themeTitle: string) => void;
}

const useWindowSize = () => {
  const [size, setSize] = useState<[number, number]>([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

const mapStateToProps = (state: stateProps) => {
  const { user, app, navbar } = state;

  return {
    user,
    app,
    navbar
  };
};

const Layout: FC<LayoutProps> = ({
  children,
  user,
  app,
  navbar,
  setThemeColor
}) => {
  const dispatch = useDispatch();

  dispatch(getDimensions(useWindowSize()));

  useEffect(() => {
    if (count === 0) {
      dispatch(decodeAccessToken());
      count += 1;
    }
  }, []);

  useEffect(() => {
    if (app.dimensions[0] <= 760) {
      dispatch(setIsMobile(true));
    } else {
      dispatch(setIsMobile(false));
    }
  }, [app.dimensions]);

  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <LayoutDiv>{children}</LayoutDiv>
      <Footer setThemeColor={setThemeColor} />
    </>
  );
};

export default connect(mapStateToProps)(Layout);
