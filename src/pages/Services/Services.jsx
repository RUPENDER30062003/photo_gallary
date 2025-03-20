
import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";

// Photography services data
const PHOTO_SERVICES = [
  { id: 1, title: "Portrait Photography", description: "Timeless and stunning portraits for individuals and families.", avatar: "📸" },
  { id: 2, title: "Wedding Photography", description: "Beautiful memories for your special day.", avatar: "💍" },
  { id: 3, title: "Event Coverage", description: "Comprehensive photography for events and celebrations.", avatar: "🎉" },
  { id: 4, title: "Product Photography", description: "Showcasing your products with professional shots.", avatar: "📦" },
  { id: 5, title: "Wildlife Photography", description: "Capturing nature's beauty in its purest form.", avatar: "🌿" },
  { id: 6, title: "Landscape Photography", description: "Breathtaking views and scenic captures.", avatar: "🏞️" },
  { id: 7, title: "Fashion Photography", description: "Stylish and glamorous shoots for models and brands.", avatar: "👗" },
  { id: 8, title: "Food Photography", description: "Mouth-watering visuals for restaurants and chefs.", avatar: "🍴" },
  { id: 9, title: "Travel Photography", description: "Documenting adventures and travel destinations.", avatar: "✈️" },
  { id: 10, title: "Sports Photography", description: "Action-packed shots of sports and athletes.", avatar: "🏅" },
  { id: 11, title: "Architectural Photography", description: "Highlighting the beauty of structures and buildings.", avatar: "🏛️" },
  { id: 12, title: "Macro Photography", description: "Close-up shots revealing intricate details.", avatar: "🔬" },
  { id: 13, title: "Black and White Photography", description: "Classic monochrome captures for timeless appeal.", avatar: "⚫" },
  { id: 14, title: "Pet Photography", description: "Adorable portraits of your furry friends.", avatar: "🐾" },
  { id: 15, title: "Aerial Photography", description: "Stunning shots from above using drones.", avatar: "🚁" },
  { id: 16, title: "Street Photography", description: "Capturing candid moments in urban settings.", avatar: "🏙️" },
  { id: 17, title: "Maternity Photography", description: "Celebrating the beauty of motherhood.", avatar: "🤰" },
  { id: 18, title: "Newborn Photography", description: "Cherished memories of your baby's first days.", avatar: "👶" },
  { id: 19, title: "Commercial Photography", description: "Professional images for marketing and advertising.", avatar: "💼" },
  { id: 20, title: "Fine Art Photography", description: "Creative expressions through visual storytelling.", avatar: "🎨" },
];

const ServicesPage = () => {
  return (
    <Box component="section" sx={{ my: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="h3"
            fontWeight="bold"
            color="rgb(25, 118, 210)"
            gutterBottom
          >
            Our Photography Services
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Explore a wide range of professional photography services tailored to your needs.
          </Typography>
        </Box>

        {/* Services Photo Gallery */}
        <Grid container spacing={4}>
          {PHOTO_SERVICES.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                  height: "100%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                {/* Service Avatar */}
                <Avatar
                  sx={{
                    bgcolor: "#bbdefb",
                    color: "#1e88e5",
                    width: 100,
                    height: 100,
                    fontSize: "3rem",
                    mt: 3,
                    mb: 2,
                  }}
                >
                  {service.avatar}
                </Avatar>

                {/* Service Details */}
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesPage;
