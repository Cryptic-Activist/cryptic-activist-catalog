import React, { useEffect } from 'react';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from '../utils/hooks/usePersistedState';

import Layout from '../components/Layout';

import createStore from '../store';

import themes from '../styles/themes/themes';

const MyApp = ({ Component, pageProps, store }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    'theme',
    themes.light
  );

  function setThemeColor(themeTitle: string): void {
    for (const [key, value] of Object.entries(themes)) {
      if (key === themeTitle) {
        setTheme(value);
      }
    }
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout setThemeColor={setThemeColor}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx });
  }

  const { store } = ctx;

  return { pageProps, store };
};

export default withRedux(createStore)(withReduxSaga(MyApp));
