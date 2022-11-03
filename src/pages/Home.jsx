import AppBar from 'components/AppBar';
import { Outlet } from 'react-router-dom';
import { Wrapper } from './Home.styled';

function Home() {
  return (
    <Wrapper>
      <AppBar />
      <Outlet />
    </Wrapper>
  );
}

export default Home;
