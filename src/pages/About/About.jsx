



import React from "react";
import { Box, Container, Typography, Grid, Button, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const DUMMY_PHOTOS = [
  { id: 1, title: "Sunset Hills Villa", description: "Breathtaking 4-bedroom villa with panoramic sunset views and infinity pool.", src: "/assets/images/photo5.jpg" },
  { id: 2, title: "Metropolitan Loft", description: "Sleek 2-bedroom penthouse with floor-to-ceiling windows and smart home technology.", src: "/assets/images/photo6.jpg" },
  { id: 3, title: "Innovation Park Plaza", description: "Modern 3-floor commercial complex with flexible workspace designs.", src: "/assets/images/photo7.jpg" },
  { id: 4, title: "Pacific Wave Residence", description: "Luxury beachfront condo with private beach access and ocean-view terraces.", src: "/assets/images/photo8.jpg" },
  { id: 5, title: "Alpine Meadows Chalet", description: "Rustic 5-bedroom mountain home with ski resort proximity and natural stone fireplace.", src: "/assets/images/photo9.jpg" },
  { id: 6, title: "Emerald Valley Estate", description: "Expansive countryside ranch with organic gardens and guest cottage.", src: "/assets/images/photo10.jpg" },
  { id: 7, title: "Geometric Glass House", description: "Award-winning minimalist design with sustainable materials and integrated landscaping.", src: "/assets/images/photo11.jpg" },
  { id: 8, title: "Harmony Grove Residence", description: "Spacious family home with open floor plan, playroom, and community park access.", src: "/assets/images/photo12.jpg" },
  { id: 9, title: "Skyline Tower Penthouse", description: "Exclusive top-floor apartment with 360-degree city lights and rooftop entertainment area.", src: "/assets/images/photo13.jpeg" },
];

const FEATURES = [
  { title: "Strategic Locations", description: "Carefully selected properties in thriving, up-and-coming neighborhoods." },
  { title: "Cutting-Edge Amenities", description: "Advanced technologies and lifestyle-enhancing features in every property." },
  { title: "Personalized Solutions", description: "Flexible property options tailored to individual client preferences and needs." },
  { title: "Integrity in Transactions", description: "Comprehensive documentation and complete transparency throughout the buying process." },
  { title: "Professional Guidance", description: "Dedicated real estate advisors with deep market insights and client-first approach." },
  { title: "Sustainable Living", description: "Environmentally conscious designs that reduce carbon footprint and promote energy efficiency." },
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
              About Horizon Estates
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: "auto" }}>
              Horizon Estates is your premier gateway to exceptional property experiences. From luxurious beachfront villas to innovative urban apartments, we curate an exclusive collection of distinctive properties that transform living spaces into extraordinary lifestyles. Our carefully selected portfolio represents the pinnacle of architectural design, comfort, and location.
              We go beyond traditional real estate by offering more than just properties – we provide keys to dreams, opportunities, and life-changing environments. Each property in our collection tells a unique story, crafted to meet the diverse aspirations of discerning homeowners and investors.
              Whether you're seeking a serene mountain retreat, a dynamic city penthouse, or a spacious family home, Horizon Estates connects you with properties that inspire, comfort, and elevate your living experience. Our commitment to quality, transparency, and personalized service ensures that your journey to finding the perfect property is as exceptional as the spaces we showcase.
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