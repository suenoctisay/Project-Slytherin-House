import { Outlet } from 'react-router-dom';

import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Home = () => {
  return (
    <div>
      {/* HEADER */}
      <Header />

      {/* CONTENT */}
      <div className='bg-phrases-01'>
        <div className='bg-opacity'>
          <div className='phrase'>
            <p className='quote-01'>
              “We Slytherins are brave, yes, but not stupid. For instance, given the choice, we will always choose to save our own necks.”
            </p>
            <p className='author'> — Phineas Nigellus Black, Harry Potter and the Order of the Phoenix</p>
          </div>
          <div className='phrase'>
            <p className='quote-01'>
              “You could be great, you know, it’s all here in your head, and Slytherin will help you on the way to greatness, no doubt about that.”
            </p>
            <p className='author'> — The Sorting Hat, Harry Potter and the Philosopher’s Stone</p>
          </div>
        </div>
      </div>

      <Outlet />

      <div className='bg-phrases-02'>
        <div className='bg-opacity'>
          <p className='quote-02'>
            “Or perhaps in Slytherin, you'll make your real friends, those cunning folk use any means to achieve their ends.”
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default Home
