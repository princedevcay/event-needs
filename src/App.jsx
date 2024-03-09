import './App.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Home from './pages/Home';
import Posts from './components/Post/Blog';
import SinglePost from './components/Post/Single';
import Vendors from './components/Vendor/Vendors'
import SingleVendor from './components/Vendor/SingleVendor'
import Login from '../src/components/Auth/Login'
import ThankYouPage from '../src/components/ThankYou'
import TermsAndConditions from './components/TermsAndConditions';
import ListYourBusiness from './components/ListYourBusiness'
import MainLayout from './components/MainLayout';

const customTheme = extendTheme({
  styles: {
    global: {
      'html, body': {
      },
    },
  },
  colors: {
    brown: {
      50: '#f7f2ee', // very light brown
      100: '#e6d5cb',
      200: '#d5b9a9',
      300: '#c49d87',
      400: '#b48065',
      500: '#a36443', // base brown color
      600: '#824f34',
      700: '#613a25',
      800: '#412515',
      900: '#211108', // very dark brown
    },
    black: {
      50: '#e8e8e8', // light black, more like grey
      100: '#d1d1d1',
      200: '#bababa',
      300: '#a3a3a3',
      400: '#8c8c8c',
      500: '#757575', // medium black, solid grey
      600: '#5e5e5e',
      700: '#474747',
      800: '#303030',
      900: '#191919', // very dark black
    },
  },
  fonts: {
    heading: `'Cormorant', sans-serif`,
    body: `'Lato', sans-serif`,
  },
  // ... other theme overrides if you have
});

function App() {
  const [cookies] = useCookies(['isAuthenticated']);
  
  return (
  
      <ChakraProvider theme={customTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:postId" element={<SinglePost />} />
            <Route exact path="/vendors" element={<Vendors/>} />
            <Route exact path="/list-your-business" element={<ListYourBusiness/>} />
            <Route path="/vendor/:vendorId" element={<SingleVendor/>} />
            <Route path="/login" element ={<Login/>} />
            <Route path="/thank-you" element={<ThankYouPage/>} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions/>} />
            {/* Protected Routes */}
          <Route
            path="/*"
            element={cookies.isAuthenticated ? <MainLayout /> : <Navigate to="/" />}
          />
        </Routes>
        </Router>
      </ChakraProvider>
  );
}

export default App;
