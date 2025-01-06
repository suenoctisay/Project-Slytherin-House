import './App.css'
import '../assets/material-ui-overrides.css'

// pages imports
import CommonRoom from './pages/common-room';
import Characters from './pages/characters';

// layouts imports
import RootLayout from './layouts/root-layout';
import HomeLayout from './layouts/home-layout';

// react-router imports
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements( 
    <Route path="/" element={<RootLayout />} >
      <Route path="/home" element={<HomeLayout />}>
        <Route path="common-room" element={<CommonRoom />} />
        <Route path="characters" element={<Characters />}/>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
