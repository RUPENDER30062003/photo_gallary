// import { ThemeProvider, CssBaseline } from '@mui/material';
// import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Service from './pages/Services/Services';
// import theme from './theme/theme';


// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <MainLayout>
//         <Home />
//       </MainLayout>
//     </ThemeProvider>
//   );
// }


// export default App;









// import { ThemeProvider, CssBaseline } from '@mui/material';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainLayout from './layouts/MainLayout';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Services from './pages/Services/Services';
// import theme from './theme/theme';

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
      
//         <MainLayout>
//           <Router>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/services" element={<Services />} />
//             </Routes>
//           </Router>
//         </MainLayout>
      
//     </ThemeProvider>
//   );
// }

// export default App;



// App.jsx

import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import theme from './theme/theme';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <ScrollToTop/>
        <MainLayout>
        </MainLayout>
      </Router>
    </ThemeProvider>
  );
}


export default App;