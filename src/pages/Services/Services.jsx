
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


// Real estate services data
const REAL_ESTATE_SERVICES = [
  { id: 1, title: "Property Listing", description: "Showcase your property to potential buyers and renters.", avatar: "🏠" },
  { id: 2, title: "Virtual Tours", description: "Interactive 3D tours for an immersive property viewing experience.", avatar: "🖥️" },
  { id: 3, title: "Market Analysis", description: "Accurate and detailed property market analysis.", avatar: "📊" },
  { id: 4, title: "Property Management", description: "Comprehensive management services for landlords and property owners.", avatar: "🔑" },
  { id: 5, title: "Legal Assistance", description: "Expert guidance on property-related legal matters.", avatar: "⚖️" },
  { id: 6, title: "Mortgage Assistance", description: "Helping clients secure the best mortgage deals.", avatar: "🏦" },
  { id: 7, title: "Home Staging", description: "Prepare and stage homes to maximize appeal to buyers.", avatar: "🛋️" },
  { id: 8, title: "Rentals and Leasing", description: "Find and secure rental properties or tenants.", avatar: "📄" },
  { id: 9, title: "Commercial Real Estate", description: "Specialized services for commercial property transactions.", avatar: "🏢" },
  { id: 10, title: "Land Acquisition", description: "Assistance with purchasing or selling land.", avatar: "🌾" },
  { id: 11, title: "Relocation Services", description: "Smooth and hassle-free relocation solutions.", avatar: "🚚" },
  { id: 12, title: "Luxury Properties", description: "Exclusive listings of high-end and luxury homes.", avatar: "💎" },
  { id: 13, title: "Investment Opportunities", description: "Identify and evaluate real estate investment options.", avatar: "📈" },
  { id: 14, title: "Property Photography", description: "Professional photography to highlight property features.", avatar: "📸" },
  { id: 15, title: "Custom Searches", description: "Personalized searches to find the perfect property.", avatar: "🔍" },
  { id: 16, title: "Open Houses", description: "Organize and manage property open house events.", avatar: "🏡" },
  { id: 17, title: "Negotiation Services", description: "Expert negotiation to secure the best deals.", avatar: "🤝" },
  { id: 18, title: "Eco-Friendly Homes", description: "Specializing in sustainable and green properties.", avatar: "🌿" },
  { id: 19, title: "Renovation Consultation", description: "Advice on property upgrades and renovations.", avatar: "🔨" },
  { id: 20, title: "Local Area Insights", description: "Detailed information about neighborhoods and amenities.", avatar: "📍" },
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
            Our Real Estates Services
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Explore a wide range of real estate properties.
          </Typography>
        </Box>

        {/* Services Photo Gallery */}
        <Grid container spacing={4}>
          {REAL_ESTATE_SERVICES.map((service) => (
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
