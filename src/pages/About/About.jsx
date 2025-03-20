



import React from "react";
import { Box, Container, Typography, Grid, Button, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

// Expanded dummy photos data
const DUMMY_PHOTOS = [
  { id: 1, title: "Artistic Nature", description: "Discover breathtaking landscapes and serene beauty.", src: "/assets/images/photo5.jpg" },
  { id: 2, title: "City Life", description: "Vibrant cityscapes that captivate your senses.", src: "/assets/images/photo6.jpg" },
  { id: 3, title: "Wildlife Wonders", description: "Explore the wild and its untamed inhabitants.", src: "/assets/images/photo7.jpg" },
  { id: 4, title: "Ocean Horizons", description: "Endless blues and dramatic coastal scenes.", src: "/assets/images/photo8.jpg" },
  { id: 5, title: "Mountain Majesty", description: "Towering peaks and rugged terrain captured in stunning detail.", src: "/assets/images/photo9.jpg" },
  { id: 6, title: "Desert Mirages", description: "The stark beauty and hidden life of arid landscapes.", src: "/assets/images/photo10.jpg" },
  { id: 7, title: "Architectural Marvels", description: "Human ingenuity expressed through remarkable structures.", src: "/assets/images/photo11.jpg" },
  { id: 8, title: "Seasonal Splendor", description: "The changing faces of nature throughout the year.", src: "/assets/images/photo12.jpg" },
  { id: 9, title: "Nightscape Wonders", description: "Cities and landscapes transformed under starlight.", src: "/assets/images/photo13.jpeg" },
];

// Expanded features data
const FEATURES = [
  { title: "High-Quality Images", description: "Experience top-notch visuals in full resolution." },
  { title: "Curated Categories", description: "Organized for easy exploration and inspiration." },
  { title: "User-Friendly Design", description: "Simple, intuitive interface for all users." },
  { title: "Regular Updates", description: "Fresh content added weekly to keep you inspired." },
  { title: "Mobile Optimized", description: "Perfect viewing experience on any device." },
  { title: "Download Options", description: "Save your favorite images for offline inspiration." },
];

const AboutPage = () => {
  return (
    <Box component="section" sx={{ backgroundColor: "#f5f5f5", py: 4 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              About Canvas World
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: "auto" }}>
              Canvas World is your personal gateway to stunning visual storytelling. From awe-inspiring landscapes to vibrant cityscapes, explore a curated gallery of breathtaking photography.
            </Typography>
          </motion.div>
        </Box>

        {/* Features Section */}
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
          Our Features
        </Typography>
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {FEATURES.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Card sx={{ height: 200, boxShadow: 3, display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Featured Gallery Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
            Featured Photos
          </Typography>
          <Grid container spacing={3}>
            {DUMMY_PHOTOS.map((photo) => (
              <Grid item xs={12} sm={6} md={4} key={photo.id}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card sx={{ 
                    boxShadow: 3, 
                    height: 340, 
                    display: 'flex', 
                    flexDirection: 'column' 
                  }}>
                    <CardMedia 
                      component="img" 
                      image={photo.src} 
                      alt={photo.title} 
                      sx={{ 
                        height: 200, 
                        objectFit: 'cover' 
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {photo.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {photo.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <Button variant="contained" color="primary" size="large">
              Explore the Full Gallery
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;