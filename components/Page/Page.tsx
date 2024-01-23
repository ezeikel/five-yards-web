import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';
import GlobalStyle from '../../GlobalStyle';
import Meta from '../Meta/Meta';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Wrapper, Inner, StyledToastContainer } from './Page.styled';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  default: {
    textColor: 'var(--color-black)',
    white: 'var(--color-white)',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  },
};

const Page = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Meta />
      <Header />
      <Wrapper>
        <Inner>{children}</Inner>
        <Footer />
        <StyledToastContainer
          position="bottom-center"
          draggable
          hideProgressBar
          pauseOnHover
          autoClose={3000}
          closeOnClick={false}
        />
      </Wrapper>
    </ThemeProvider>
  </>
);

export default Page;
