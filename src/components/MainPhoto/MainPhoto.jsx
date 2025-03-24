// import React from 'react'
// import { Box,Typography } from '@mui/material'

// const MainPhoto = () => {
//   return (
//     <>
//          <Box
//             component="img"
//             src="/assets/images/photo1.jpg"
//             alt="Photo Gallery"
//             sx={{
//               display: "block",
//               maxWidth: "100%",
//               height: "auto", 
//             //   width: "100vd"
//             }}
//           /> 
          
//            <Typography
//             variant="h4"
//             sx={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               color: "white",
//               textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
//               fontWeight: "bold",
//             }}
//           >
//             Welcome to Canvas World
//           </Typography> 

//     </>
//   )
// }

// export default MainPhoto




// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Container, 
//   Grid, 
//   TextField, 
//   Select, 
//   MenuItem, 
//   FormControl, 
//   InputLabel, 
//   Slider, 
//   FormGroup, 
//   FormControlLabel, 
//   Checkbox, 
//   Button,
//   OutlinedInput
// } from '@mui/material';

// const MainPhoto = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     propertyType: '',
//     location: '',
//     minPrice: '',
//     maxPrice: '',
//     bedrooms: '',
//     bathrooms: '',
//     propertyStatus: '',
//     minSqFt: '',
//     maxSqFt: '',
//     amenities: [],
//     keywords: ''
//   });

//   // Handle input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle amenity checkbox changes
//   const handleAmenityChange = (event) => {
//     const { value, checked } = event.target;
//     setFormData({
//       ...formData,
//       amenities: checked 
//         ? [...formData.amenities, value]
//         : formData.amenities.filter(amenity => amenity !== value)
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Search data:', formData);
//     // Add your search logic here
//   };

//   // Amenity options
//   const amenityOptions = [
//     'Swimming Pool',
//     'Gym',
//     'Parking',
//     'Garden',
//     'Balcony',
//     'Security',
//     'Elevator'
//   ];

//   return (
//     <>
//       {/* Full-width image with overlay text */}
//       <Box sx={{ position: "relative", width: "100%", height: "60vh" }}>
//         <Box
//           component="img"
//           src="/assets/images/photo1.jpg"
//           alt="Property Search"
//           sx={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "center"
//           }}
//         />
        
//         {/* Welcome text overlay */}
//         <Typography
//           variant="h3"
//           sx={{
//             position: "absolute",
//             top: "30%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "white",
//             textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
//             fontWeight: "bold",
//             textAlign: "center",
//             width: "80%"
//           }}
//         >
//           Welcome to Canvas World
//         </Typography>
        
//         {/* Search form overlay */}
//         <Container
//           maxWidth="lg"
//           sx={{
//             position: "absolute",
//             bottom: "0",
//             left: "50%",
//             transform: "translate(-50%, 50%)",
//             backgroundColor: "white",
//             borderRadius: "8px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//             padding: "20px"
//           }}
//         >
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               {/* First row */}
//               <Grid item xs={12} md={3}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Property Type</InputLabel>
//                   <Select
//                     name="propertyType"
//                     value={formData.propertyType}
//                     onChange={handleChange}
//                     label="Property Type"
//                   >
//                     <MenuItem value="apartment">Apartment</MenuItem>
//                     <MenuItem value="house">House</MenuItem>
//                     <MenuItem value="commercial">Commercial</MenuItem>
//                     <MenuItem value="land">Land</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={12} md={3}>
//                 <TextField
//                   fullWidth
//                   label="Location"
//                   name="location"
//                   variant="outlined"
//                   size="small"
//                   value={formData.location}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               <Grid item xs={6} md={3}>
//                 <TextField
//                   fullWidth
//                   label="Min Price"
//                   name="minPrice"
//                   type="number"
//                   variant="outlined"
//                   size="small"
//                   value={formData.minPrice}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               <Grid item xs={6} md={3}>
//                 <TextField
//                   fullWidth
//                   label="Max Price"
//                   name="maxPrice"
//                   type="number"
//                   variant="outlined"
//                   size="small"
//                   value={formData.maxPrice}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               {/* Second row */}
//               <Grid item xs={6} md={2}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Bedrooms</InputLabel>
//                   <Select
//                     name="bedrooms"
//                     value={formData.bedrooms}
//                     onChange={handleChange}
//                     label="Bedrooms"
//                   >
//                     <MenuItem value="any">Any</MenuItem>
//                     <MenuItem value="1">1+</MenuItem>
//                     <MenuItem value="2">2+</MenuItem>
//                     <MenuItem value="3">3+</MenuItem>
//                     <MenuItem value="4">4+</MenuItem>
//                     <MenuItem value="5">5+</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={6} md={2}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Bathrooms</InputLabel>
//                   <Select
//                     name="bathrooms"
//                     value={formData.bathrooms}
//                     onChange={handleChange}
//                     label="Bathrooms"
//                   >
//                     <MenuItem value="any">Any</MenuItem>
//                     <MenuItem value="1">1+</MenuItem>
//                     <MenuItem value="2">2+</MenuItem>
//                     <MenuItem value="3">3+</MenuItem>
//                     <MenuItem value="4">4+</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={12} md={2}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Status</InputLabel>
//                   <Select
//                     name="propertyStatus"
//                     value={formData.propertyStatus}
//                     onChange={handleChange}
//                     label="Status"
//                   >
//                     <MenuItem value="for-sale">For Sale</MenuItem>
//                     <MenuItem value="for-rent">For Rent</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={6} md={2}>
//                 <TextField
//                   fullWidth
//                   label="Min Sq Ft"
//                   name="minSqFt"
//                   type="number"
//                   variant="outlined"
//                   size="small"
//                   value={formData.minSqFt}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               <Grid item xs={6} md={2}>
//                 <TextField
//                   fullWidth
//                   label="Max Sq Ft"
//                   name="maxSqFt"
//                   type="number"
//                   variant="outlined"
//                   size="small"
//                   value={formData.maxSqFt}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               <Grid item xs={12} md={2}>
//                 <Button 
//                   variant="contained" 
//                   fullWidth 
//                   type="submit"
//                   sx={{ 
//                     height: '100%', 
//                     backgroundColor: '#1976d2',
//                     '&:hover': {
//                       backgroundColor: '#115293',
//                     }
//                   }}
//                 >
//                   Search
//                 </Button>
//               </Grid>
              
//               {/* Third row */}
//               <Grid item xs={12} md={8}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Amenities</InputLabel>
//                   <Select
//                     multiple
//                     name="amenities"
//                     value={formData.amenities}
//                     onChange={(e) => setFormData({...formData, amenities: e.target.value})}
//                     input={<OutlinedInput label="Amenities" />}
//                     renderValue={(selected) => selected.join(', ')}
//                   >
//                     {amenityOptions.map((amenity) => (
//                       <MenuItem key={amenity} value={amenity}>
//                         <Checkbox checked={formData.amenities.indexOf(amenity) > -1} />
//                         {amenity}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   fullWidth
//                   label="Keywords"
//                   name="keywords"
//                   variant="outlined"
//                   size="small"
//                   placeholder="e.g. Sea View, Garage"
//                   value={formData.keywords}
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//           </form>
//         </Container>
//       </Box>
      
//       {/* Heading below the image */}
//       <Box sx={{ textAlign: "center", mt: 12, mb: 6 }}>
//         <Typography variant="h4" component="h2" fontWeight="bold" color="primary">
//           Your Gateway to Perfect Properties
//         </Typography>
//       </Box>
//     </>
//   );
// };

// export default MainPhoto;










// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Container, 
//   Grid, 
//   TextField, 
//   Select, 
//   MenuItem, 
//   FormControl, 
//   InputLabel, 
//   Slider, 
//   FormGroup, 
//   FormControlLabel, 
//   Checkbox, 
//   Button,
//   OutlinedInput
// } from '@mui/material';

// const MainPhoto = () => {
//   // State for form fields
//   const [formData, setFormData] = useState({
//     propertyType: '',
//     location: '',
//     minPrice: '',
//     maxPrice: '',
//     bedrooms: '',
//     bathrooms: '',
//     propertyStatus: '',
//     minSqFt: '',
//     maxSqFt: '',
//     amenities: [],
//     keywords: ''
//   });

//   // Handle input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle amenity checkbox changes
//   const handleAmenityChange = (event) => {
//     const { value, checked } = event.target;
//     setFormData({
//       ...formData,
//       amenities: checked 
//         ? [...formData.amenities, value]
//         : formData.amenities.filter(amenity => amenity !== value)
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Search data:', formData);
//     // Add your search logic here
//   };

//   // Amenity options
//   const amenityOptions = [
//     'Swimming Pool',
//     'Gym',
//     'Parking',
//     'Garden',
//     'Balcony',
//     'Security',
//     'Elevator'
//   ];

//   return (
//     <>
//       {/* Full-width image with overlay text */}
//       <Box sx={{ position: "relative",  height: "100vh" }}>
//         <Box
//           component="img"
//           src="/assets/images/photo1.jpg"
//           alt="Property Search"
//           sx={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "center"
//           }}
//         />
        
//         {/* Welcome text overlay */}
//         <Typography
//           variant="h3"
//           sx={{
//             position: "absolute",
//             top: "25%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: "white",
//             textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
//             fontWeight: "bold",
//             textAlign: "center",
//             width: "80%"
//           }}
//         >
//           Welcome to Canvas World
//         </Typography>
        
//         {/* Search form overlay */}
//         <Container
//           maxWidth="lg"
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             backgroundColor: "rgba(255, 255, 255, 0.9)",
//             borderRadius: "8px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//             padding: "20px"
//           }}
//         >
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               {/* First row */}
//               <Grid item xs={12} md={3}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Property Type</InputLabel>
//                   <Select
//                     name="propertyType"
//                     value={formData.propertyType}
//                     onChange={handleChange}
//                     label="Property Type"
//                   >
//                     <MenuItem value="apartment">Apartment</MenuItem>
//                     <MenuItem value="house">House</MenuItem>
//                     <MenuItem value="commercial">Commercial</MenuItem>
//                     <MenuItem value="land">Land</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={12} md={3}>
//                 <TextField
//                   fullWidth
//                   label="Location"
//                   name="location"
//                   variant="outlined"
//                   size="small"
//                   value={formData.location}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               <Grid item xs={6} md={3}>
//                 <TextField
//                   fullWidth
//                   label="Min Price"
//                   name="minPrice"
//                   type="number"
//                   variant="outlined"
//                   size="small"
//                   value={formData.minPrice}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               <Grid item xs={6} md={3}>
//                 <TextField
//                   fullWidth
//                   label="Max Price"
//                   name="maxPrice"
//                   type="number"
//                   variant="outlined"
//                   size="small"
//                   value={formData.maxPrice}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               {/* Second row */}
//               <Grid item xs={6} md={2}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Bedrooms</InputLabel>
//                   <Select
//                     name="bedrooms"
//                     value={formData.bedrooms}
//                     onChange={handleChange}
//                     label="Bedrooms"
//                   >
//                     <MenuItem value="any">Any</MenuItem>
//                     <MenuItem value="1">1+</MenuItem>
//                     <MenuItem value="2">2+</MenuItem>
//                     <MenuItem value="3">3+</MenuItem>
//                     <MenuItem value="4">4+</MenuItem>
//                     <MenuItem value="5">5+</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={6} md={2}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Bathrooms</InputLabel>
//                   <Select
//                     name="bathrooms"
//                     value={formData.bathrooms}
//                     onChange={handleChange}
//                     label="Bathrooms"
//                   >
//                     <MenuItem value="any">Any</MenuItem>
//                     <MenuItem value="1">1+</MenuItem>
//                     <MenuItem value="2">2+</MenuItem>
//                     <MenuItem value="3">3+</MenuItem>
//                     <MenuItem value="4">4+</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={12} md={2}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Status</InputLabel>
//                   <Select
//                     name="propertyStatus"
//                     value={formData.propertyStatus}
//                     onChange={handleChange}
//                     label="Status"
//                   >
//                     <MenuItem value="for-sale">For Sale</MenuItem>
//                     <MenuItem value="for-rent">For Rent</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={6} md={2}>
//                 <TextField
//                   fullWidth
//                   label="Min Sq Ft"
//                   name="minSqFt"
//                   type="number"
//                   variant="outlined"
//                   size="small"
//                   value={formData.minSqFt}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               <Grid item xs={6} md={2}>
//                 <TextField
//                   fullWidth
//                   label="Max Sq Ft"
//                   name="maxSqFt"
//                   type="number"
//                   variant="outlined"
//                   size="small"
//                   value={formData.maxSqFt}
//                   onChange={handleChange}
//                 />
//               </Grid>
              
//               <Grid item xs={12} md={2}>
//                 <Button 
//                   variant="contained" 
//                   fullWidth 
//                   type="submit"
//                   sx={{ 
//                     height: '100%', 
//                     backgroundColor: '#1976d2',
//                     '&:hover': {
//                       backgroundColor: '#115293',
//                     }
//                   }}
//                 >
//                   Search
//                 </Button>
//               </Grid>
              
//               {/* Third row */}
//               <Grid item xs={12} md={8}>
//                 <FormControl fullWidth variant="outlined" size="small">
//                   <InputLabel>Amenities</InputLabel>
//                   <Select
//                     multiple
//                     name="amenities"
//                     value={formData.amenities}
//                     onChange={(e) => setFormData({...formData, amenities: e.target.value})}
//                     input={<OutlinedInput label="Amenities" />}
//                     renderValue={(selected) => selected.join(', ')}
//                   >
//                     {amenityOptions.map((amenity) => (
//                       <MenuItem key={amenity} value={amenity}>
//                         <Checkbox checked={formData.amenities.indexOf(amenity) > -1} />
//                         {amenity}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>
              
//               <Grid item xs={12} md={4}>
//                 <TextField
//                   fullWidth
//                   label="Keywords"
//                   name="keywords"
//                   variant="outlined"
//                   size="small"
//                   placeholder="e.g. Sea View, Garage"
//                   value={formData.keywords}
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//           </form>
//         </Container>
//       </Box>
      
//       {/* Heading below the image */}
//       <Box sx={{ textAlign: "center", mt: 6, mb: 6 }}>
//         <Typography variant="h4" component="h2" fontWeight="bold" color="primary">
//           Your Gateway to Perfect Properties
//         </Typography>
//       </Box>
//     </>
//   );
// };

// export default MainPhoto;


// import React, { useState } from 'react';
// import { 
//   Box, 
//   Typography, 
//   Container, 
//   Grid, 
//   TextField, 
//   Select, 
//   MenuItem, 
//   FormControl, 
//   InputLabel, 
//   Slider, 
//   FormGroup, 
//   FormControlLabel, 
//   Checkbox, 
//   Button,
//   OutlinedInput
// } from '@mui/material';

// const MainPhoto = () => {
//   // State to track if form should be shown
//   const [showForm, setShowForm] = useState(false);
  
//   // State for form fields
//   const [formData, setFormData] = useState({
//     propertyType: '',
//     location: '',
//     minPrice: '',
//     maxPrice: '',
//     bedrooms: '',
//     bathrooms: '',
//     propertyStatus: '',
//     minSqFt: '',
//     maxSqFt: '',
//     amenities: [],
//     keywords: ''
//   });

//   // Handle input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log('Search data:', formData);
//     // Add your search logic here
//   };

//   // Amenity options
//   const amenityOptions = [
//     'Swimming Pool',
//     'Gym',
//     'Parking',
//     'Garden',
//     'Balcony',
//     'Security',
//     'Elevator'
//   ];

//   return (
//     <>
//       {/* Full-width image with overlay text and button */}
//       <Box sx={{ position: "relative", width: "100%", height: "90vh" }}>
//         <Box
//           component="img"
//           src="/assets/images/photo1.jpg"
//           alt="Property Search"
//           sx={{
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             objectPosition: "center"
//           }}
//         />
        
//         {/* Welcome text overlay */}
//         <Box
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             textAlign: "center",
//             width: "80%"
//           }}
//         >
//           <Typography
//             variant="h2"
//             sx={{
//               color: "white",
//               textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
//               fontWeight: "bold",
//               mb: 4
//             }}
//           >
//             Welcome to Canvas World
//           </Typography>
          
//           {/* Explore button */}
//           <Button
//             variant="contained"
//             size="large"
//             onClick={() => setShowForm(true)}
//             sx={{
//               fontSize: "1.2rem",
//               padding: "12px 30px",
//               backgroundColor: "#1976d2",
//               '&:hover': {
//                 backgroundColor: "#115293",
//               }
//             }}
//           >
//             Explore
//           </Button>
//         </Box>
//       </Box>
      
//       {/* Heading below the image */}
//       <Box sx={{ textAlign: "center", mt: 6, mb: 6 }}>
//         <Typography variant="h4" component="h2" fontWeight="bold" color="primary">
//           Your Gateway to Perfect Properties
//         </Typography>
//       </Box>
      
//       {/* Property search form - shown only when explore button is clicked */}
//       {showForm && (
//         <Container maxWidth="lg" sx={{ mb: 8 }}>
//           <Typography variant="h5" component="h3" fontWeight="bold" mb={3}>
//             Find Your Perfect Property
//           </Typography>
          
//           <Box sx={{
//             backgroundColor: "white",
//             borderRadius: "8px",
//             boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//             padding: "24px"
//           }}>
//             <form onSubmit={handleSubmit}>
//               <Grid container spacing={3}>
//                 {/* First row */}
//                 <Grid item xs={12} md={3}>
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel>Property Type</InputLabel>
//                     <Select
//                       name="propertyType"
//                       value={formData.propertyType}
//                       onChange={handleChange}
//                       label="Property Type"
//                     >
//                       <MenuItem value="apartment">Apartment</MenuItem>
//                       <MenuItem value="house">House</MenuItem>
//                       <MenuItem value="commercial">Commercial</MenuItem>
//                       <MenuItem value="land">Land</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
                
//                 <Grid item xs={12} md={3}>
//                   <TextField
//                     fullWidth
//                     label="Location"
//                     name="location"
//                     variant="outlined"
//                     value={formData.location}
//                     onChange={handleChange}
//                   />
//                 </Grid>
                
//                 <Grid item xs={6} md={3}>
//                   <TextField
//                     fullWidth
//                     label="Min Price"
//                     name="minPrice"
//                     type="number"
//                     variant="outlined"
//                     value={formData.minPrice}
//                     onChange={handleChange}
//                   />
//                 </Grid>
                
//                 <Grid item xs={6} md={3}>
//                   <TextField
//                     fullWidth
//                     label="Max Price"
//                     name="maxPrice"
//                     type="number"
//                     variant="outlined"
//                     value={formData.maxPrice}
//                     onChange={handleChange}
//                   />
//                 </Grid>
                
//                 {/* Second row */}
//                 <Grid item xs={6} md={2}>
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel>Bedrooms</InputLabel>
//                     <Select
//                       name="bedrooms"
//                       value={formData.bedrooms}
//                       onChange={handleChange}
//                       label="Bedrooms"
//                     >
//                       <MenuItem value="any">Any</MenuItem>
//                       <MenuItem value="1">1+</MenuItem>
//                       <MenuItem value="2">2+</MenuItem>
//                       <MenuItem value="3">3+</MenuItem>
//                       <MenuItem value="4">4+</MenuItem>
//                       <MenuItem value="5">5+</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
                
//                 <Grid item xs={6} md={2}>
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel>Bathrooms</InputLabel>
//                     <Select
//                       name="bathrooms"
//                       value={formData.bathrooms}
//                       onChange={handleChange}
//                       label="Bathrooms"
//                     >
//                       <MenuItem value="any">Any</MenuItem>
//                       <MenuItem value="1">1+</MenuItem>
//                       <MenuItem value="2">2+</MenuItem>
//                       <MenuItem value="3">3+</MenuItem>
//                       <MenuItem value="4">4+</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
                
//                 <Grid item xs={12} md={2}>
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel>Status</InputLabel>
//                     <Select
//                       name="propertyStatus"
//                       value={formData.propertyStatus}
//                       onChange={handleChange}
//                       label="Status"
//                     >
//                       <MenuItem value="for-sale">For Sale</MenuItem>
//                       <MenuItem value="for-rent">For Rent</MenuItem>
//                     </Select>
//                   </FormControl>
//                 </Grid>
                
//                 <Grid item xs={6} md={3}>
//                   <TextField
//                     fullWidth
//                     label="Min Sq Ft"
//                     name="minSqFt"
//                     type="number"
//                     variant="outlined"
//                     value={formData.minSqFt}
//                     onChange={handleChange}
//                   />
//                 </Grid>
                
//                 <Grid item xs={6} md={3}>
//                   <TextField
//                     fullWidth
//                     label="Max Sq Ft"
//                     name="maxSqFt"
//                     type="number"
//                     variant="outlined"
//                     value={formData.maxSqFt}
//                     onChange={handleChange}
//                   />
//                 </Grid>
                
//                 {/* Third row */}
//                 <Grid item xs={12} md={8}>
//                   <FormControl fullWidth variant="outlined">
//                     <InputLabel>Amenities</InputLabel>
//                     <Select
//                       multiple
//                       name="amenities"
//                       value={formData.amenities}
//                       onChange={(e) => setFormData({...formData, amenities: e.target.value})}
//                       input={<OutlinedInput label="Amenities" />}
//                       renderValue={(selected) => selected.join(', ')}
//                     >
//                       {amenityOptions.map((amenity) => (
//                         <MenuItem key={amenity} value={amenity}>
//                           <Checkbox checked={formData.amenities.indexOf(amenity) > -1} />
//                           {amenity}
//                         </MenuItem>
//                       ))}
//                     </Select>
//                   </FormControl>
//                 </Grid>
                
//                 <Grid item xs={12} md={4}>
//                   <TextField
//                     fullWidth
//                     label="Keywords"
//                     name="keywords"
//                     variant="outlined"
//                     placeholder="e.g. Sea View, Garage"
//                     value={formData.keywords}
//                     onChange={handleChange}
//                   />
//                 </Grid>
                
//                 {/* Search button */}
//                 <Grid item xs={12}>
//                   <Button 
//                     variant="contained" 
//                     type="submit"
//                     size="large"
//                     sx={{ 
//                       padding: "10px 30px",
//                       backgroundColor: '#1976d2',
//                       '&:hover': {
//                         backgroundColor: '#115293',
//                       }
//                     }}
//                   >
//                     Search Properties
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Box>
//         </Container>
//       )}
//     </>
//   );
// };

// export default MainPhoto;


import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
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
  Backdrop
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const MainPhoto = () => {
  // State to track if modal should be shown
  const [openModal, setOpenModal] = useState(false);
  
  // State for form fields
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: '',
    propertyStatus: '',
    minSqFt: '',
    maxSqFt: '',
    amenities: [],
    keywords: ''
  });

  // Handle input changes
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
    console.log('Search data:', formData);
    // Add your search logic here
    
    // Close modal after submission (optional)
    // setOpenModal(false);
  };

  // Modal open/close handlers
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Amenity options
  const amenityOptions = [
    'Swimming Pool',
    'Gym',
    'Parking',
    'Garden',
    'Balcony',
    'Security',
    'Elevator'
  ];

  // Modal style
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: 1200,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    overflow: 'auto'
  };

  return (
    <>
      {/* Full-width image with overlay text and button */}
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
        
        {/* Welcome text overlay */}
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
            variant="h2"
            sx={{
              color: "white",
              textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
              fontWeight: "bold",
              mb: 4
            }}
          >
            Welcome to Canvas World
          </Typography>
          
          {/* Explore button */}
          <Button
            variant="contained"
            size="large"
            onClick={handleOpenModal}
            sx={{
              fontSize: "1.2rem",
              padding: "12px 30px",
              backgroundColor: "#1976d2",
              '&:hover': {
                backgroundColor: "#115293",
              }
            }}
          >
            Explore
          </Button>
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
                  {/* First row */}
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
                  
                  {/* Second row */}
                  <Grid item xs={6} md={2}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Bedrooms</InputLabel>
                      <Select
                        name="bedrooms"
                        value={formData.bedrooms}
                        onChange={handleChange}
                        label="Bedrooms"
                      >
                        <MenuItem value="any">Any</MenuItem>
                        <MenuItem value="1">1+</MenuItem>
                        <MenuItem value="2">2+</MenuItem>
                        <MenuItem value="3">3+</MenuItem>
                        <MenuItem value="4">4+</MenuItem>
                        <MenuItem value="5">5+</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={6} md={2}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Bathrooms</InputLabel>
                      <Select
                        name="bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        label="Bathrooms"
                      >
                        <MenuItem value="any">Any</MenuItem>
                        <MenuItem value="1">1+</MenuItem>
                        <MenuItem value="2">2+</MenuItem>
                        <MenuItem value="3">3+</MenuItem>
                        <MenuItem value="4">4+</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={12} md={2}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Status</InputLabel>
                      <Select
                        name="propertyStatus"
                        value={formData.propertyStatus}
                        onChange={handleChange}
                        label="Status"
                      >
                        <MenuItem value="for-sale">For Sale</MenuItem>
                        <MenuItem value="for-rent">For Rent</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={6} md={3}>
                    <TextField
                      fullWidth
                      label="Min Sq Ft"
                      name="minSqFt"
                      type="number"
                      variant="outlined"
                      value={formData.minSqFt}
                      onChange={handleChange}
                    />
                  </Grid>
                  
                  <Grid item xs={6} md={3}>
                    <TextField
                      fullWidth
                      label="Max Sq Ft"
                      name="maxSqFt"
                      type="number"
                      variant="outlined"
                      value={formData.maxSqFt}
                      onChange={handleChange}
                    />
                  </Grid>
                  
                  {/* Third row */}
                  <Grid item xs={12} md={8}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Amenities</InputLabel>
                      <Select
                        multiple
                        name="amenities"
                        value={formData.amenities}
                        onChange={(e) => setFormData({...formData, amenities: e.target.value})}
                        input={<OutlinedInput label="Amenities" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {amenityOptions.map((amenity) => (
                          <MenuItem key={amenity} value={amenity}>
                            <Checkbox checked={formData.amenities.indexOf(amenity) > -1} />
                            {amenity}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={12} md={4}>
                    <TextField
                      fullWidth
                      label="Keywords"
                      name="keywords"
                      variant="outlined"
                      placeholder="e.g. Sea View, Garage"
                      value={formData.keywords}
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