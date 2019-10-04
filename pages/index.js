import Items from '../components/Items';
import PageWrap from "../components/styles/PageWrap";

const Home = props => (
  <PageWrap>
    {/* <Items  page={parseFloat(props.query.page) || 1}/> */}
    <Items />
  </PageWrap>
);

export default Home;