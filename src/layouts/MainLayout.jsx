import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Services from '../pages/Services/Services';
import Contact from '../pages/Contact/Contact';




const MainLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >

      <Header />
      

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: '100%',
          // padding: { xs: 2, md: 4 },
          // marginTop: -5,
        }}
      >

        {
          
            
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
        }
      </Box>
      

      <Footer />
    </Box>


  );
};

export default MainLayout;