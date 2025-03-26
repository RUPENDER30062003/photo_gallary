import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Checkbox, 
  Button,
  OutlinedInput,
  Modal,
  IconButton,
  Fade,
  Backdrop,
  InputAdornment
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const MainPhoto = () => {
  // State to track if modal should be shown
  const [openModal, setOpenModal] = useState(false);
  
  // State for search input and form fields
  const [searchInput, setSearchInput] = useState('');
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  });

  // Handle input changes in form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Search data:', { ...formData, searchInput });
    // Add your search logic here
    setOpenModal(false);
  };

  // Modal open/close handlers
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 800,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
  };

  return (
    <>
      {/* Full-width image with overlay text and search */}
      <Box sx={{ position: "relative", width: "100%", height: "90vh" }}>
        <Box
          component="img"
          src="/assets/images/photo1.jpg"
          alt="Property Search"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
          }}
        />
        
        {/* Welcome text and search overlay */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "80%"
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "white",
              textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Explore Properties That Match Your Lifestyle
          </Typography>
          
          <Typography
            variant='body1'
            sx={{
              color: "white",
              textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
              fontWeight: "bold",
              mb: 4,
            }}
          >
            Explore a wide range of properties tailored to your unique needs, 
            whether you're buying, selling, or renting. 
            From luxurious apartments to cozy family homes, our expert team ensures a seamless and stress-free real estate experience          
          </Typography>
          
          {/* Search input */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%', 
            maxWidth: 600, 
            margin: '0 auto' 
          }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search properties..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onClick={handleOpenModal}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: 'white',
                  borderRadius: '4px',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(0, 0, 0, 0.23)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                  },
                }
              }}
              sx={{
                '& .MuiInputBase-root': {
                  height: '56px',
                },
              }}
            />
            <Button
              variant="contained"
              onClick={handleOpenModal}
              sx={{
                ml: 1,
                height: '56px',
                backgroundColor: "#1976d2",
                '&:hover': {
                  backgroundColor: "#115293",
                }
              }}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>
      
      {/* Heading below the image */}
      <Box sx={{ textAlign: "center", mt: 6, mb: 6 }}>
        <Typography variant="h4" component="h2" fontWeight="bold" color="primary">
          Your Gateway to Perfect Properties
        </Typography>
      </Box>
      
      {/* Property search form modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={openModal}>
          <Box sx={modalStyle}>
            {/* Modal header with close button */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h5" component="h2" fontWeight="bold">
                Find Your Perfect Property
              </Typography>
              <IconButton onClick={handleCloseModal} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Box>
            
            {/* Form container */}
            <Box sx={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "8px"
            }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  {/* First row with 4 fields */}
                  <Grid item xs={12} md={3}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Property Type</InputLabel>
                      <Select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        label="Property Type"
                      >
                        <MenuItem value="apartment">Apartment</MenuItem>
                        <MenuItem value="house">House</MenuItem>
                        <MenuItem value="commercial">Commercial</MenuItem>
                        <MenuItem value="land">Land</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={12} md={3}>
                    <TextField
                      fullWidth
                      label="Location"
                      name="location"
                      variant="outlined"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </Grid>
                  
                  <Grid item xs={6} md={3}>
                    <TextField
                      fullWidth
                      label="Min Price"
                      name="minPrice"
                      type="number"
                      variant="outlined"
                      value={formData.minPrice}
                      onChange={handleChange}
                    />
                  </Grid>
                  
                  <Grid item xs={6} md={3}>
                    <TextField
                      fullWidth
                      label="Max Price"
                      name="maxPrice"
                      type="number"
                      variant="outlined"
                      value={formData.maxPrice}
                      onChange={handleChange}
                    />
                  </Grid>
                  
                  {/* Search button */}
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button 
                        variant="outlined" 
                        onClick={handleCloseModal}
                        size="large"
                        sx={{ padding: "10px 30px" }}
                      >
                        Cancel
                      </Button>
                      <Button 
                        variant="contained" 
                        type="submit"
                        size="large"
                        sx={{ 
                          padding: "10px 30px",
                          backgroundColor: '#1976d2',
                          '&:hover': {
                            backgroundColor: '#115293',
                          }
                        }}
                      >
                        Search Properties
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default MainPhoto;