import Layout from '../components/Layout';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../components/redux/store';
import { useTheme } from '../components/redux/selectors/themes';
import withRedux from "next-redux-wrapper";

import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {

  const { theme } = useTheme();
 
  return (
    <Provider store={store}>
      <div className='my-app' data-theme={theme}>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </div>
    </Provider>
  );
}
const makeStore = () => store;
export default withRedux(makeStore)(App);