
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Container,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Avatar,
  Modal,
  Divider,
  Paper,
  Backdrop,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';

// Define pages with paths for routing
const pages = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SERVICE', path: '/services' },
  // { name: 'CONTACT', path: '/contact'},
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorElNav, setAnchorElNav] = useState(null);
  
  // User info state
  const [userInfoOpen, setUserInfoOpen] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserInfo = () => {
    setUserInfoOpen(true);
    handleCloseNavMenu(); // Close navigation menu when opening user info
  };

  const handleCloseUserInfo = () => {
    setUserInfoOpen(false);
  };

  // Mock user data
  const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567"
  };

  // User info card component
  const UserInfoCard = () => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Avatar sx={{ width: 64, height: 64, mb: 1 ,'&:hover':{ boxShadow: 30,} } } >
            <PersonIcon fontSize="large" />
          </Avatar>
          <Typography variant="h6">{userData.name}</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2">{userData.email}</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <PhoneIcon sx={{ mr: 1, color: 'text.secondary' }} />
          <Typography variant="body2">{userData.phone}</Typography>
        </Box>
        
        <Button 
          variant="contained" 
          // color="" 
          fullWidth
          startIcon={<LogoutIcon />}
          sx={{ mt: 1 }}
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{
        backgroundColor: 'white',
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - visible on all screens */}
          <Typography
            variant="h6"
            noWrap
            
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              border: '1px solid',
              padding: '4px 18px',
              borderRadius: 1,
              marginLeft: { xs: 2, md: 20.2 },
            }}
          >
            Horizon Estates
          </Typography>

          {/* Mobile navigation menu */}
          {isMobile ? (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  '& .MuiPaper-root': {
                    width: '200px', // Fixed width for mobile menu
                    maxHeight: '80vh', // Limit height to avoid overflow
                  },
                }}
              >
                {/* Menu items with increased touch target sizes */}
                {pages.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      py: 1.5, // Increased vertical padding
                      minHeight: '48px', // Minimum height for better touch
                    }}
                  >
                    <Typography 
                      component={Link} 
                      to={page.path} 
                      sx={{ 
                        color: 'inherit',
                        textDecoration: 'none',
                        width: '100%',
                        textAlign: 'center'
                      }}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
                
                <MenuItem 
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    py: 1.5,
                    minHeight: '48px',
                  }}
                >
                  <Typography component={Link} to="/contact" sx={{ color: 'inherit', textDecoration: 'none', width: '100%', textAlign: 'center' }}>
                    CONTACT
                  </Typography>
                </MenuItem>
                
                <Divider />
                
                {/* User section in mobile menu */}
                <MenuItem 
                  onClick={handleOpenUserInfo}
                  sx={{ 
                    py: 1.5,
                    minHeight: '48px',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <AccountCircleIcon sx={{ mr: 1 }} />
                    <Typography>USER</Typography>
                  </Box>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            // Desktop navigation menu
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', marginRight: 20.2 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{ mx: 1, color: 'text.primary', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}

              <Button
                component={Link}
                to="/contact"
                variant="contained"
                startIcon={<ContactPageIcon />}
                sx={{ ml: 2 }}
              >
                CONTACT
              </Button>
              
              {/* User icon on desktop */}
              <IconButton
                color="primary"
                aria-label="user profile"
                onClick={handleOpenUserInfo}
                sx={{ ml: 2 }}
              >
                <AccountCircleIcon/>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
      
      {/* User info modal - works on both mobile and desktop */}
      <Modal
        open={userInfoOpen}
        onClose={handleCloseUserInfo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Paper 
          elevation={3}
          sx={{ 
            width: '90vw',
            maxWidth: 320,
            p: 0,
            position: 'relative',
          }}
        >
          <IconButton
            size="small"
            aria-label="close"
            onClick={handleCloseUserInfo}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              bgcolor: 'background.paper',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <CloseIcon />
          </IconButton>
          <UserInfoCard />
        </Paper>
      </Modal>
    </AppBar>
  );
};

export default Header;
