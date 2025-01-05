import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Home = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Home
