
import { Box, Grid, Typography, Container } from "@mui/material";
import PhotoCard from "../PhotoCard/PhotoCard";

const DUMMY_PHOTOS = [
  { id: 1, title: "Sunset Bliss", description: "A breathtaking view of the sunset over the horizon.", src: "/assets/images/photo5.jpg" },
  { id: 2, title: "Mountain Peaks", description: "Snow-capped mountains standing tall under a clear blue sky.", src: "/assets/images/photo6.jpg" },
  { id: 3, title: "Serene Lake", description: "A calm and peaceful lake reflecting the surrounding beauty.", src: "/assets/images/photo7.jpg" },
  { id: 4, title: "City Lights", description: "The city glowing with vibrant lights during the night.", src: "/assets/images/photo8.jpg" },
  { id: 5, title: "Forest Path", description: "A mysterious path winding through a dense forest.", src: "/assets/images/photo9.jpg" },
  { id: 6, title: "Golden Fields", description: "Vast fields of golden wheat swaying gently in the breeze.", src: "/assets/images/photo10.jpg" },
];

const PhotoGallery = () => {
  return (
    <Box component="section" sx={{ my: 4 }}>
      <Container maxWidth="lg">
        {/* Adding Text Overlay on Image */}
        <Box 
          sx={{ 
            position: "relative", 
            display: "inline-block", 
            textAlign: "center", 
            marginBottom: 4 
          }}
        >
          <Box 
            component="img"
            src="/assets/images/photo1.jpg"
            alt="Photo Gallery"
            sx={{
              display: "block",
              maxWidth: "100%",
              height: "auto" 
            }}
          />
          <Typography
            variant="h4"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              textShadow: "0px 0px 10px rgba(0,0,0,0.8)",
              fontWeight: "bold",
            }}
          >
            Welcome to Canvas World
          </Typography>
        </Box>

        <Grid container spacing={2}>
          {DUMMY_PHOTOS.map((photo) => (
            <Grid item xs={6} sm={4} md={2} key={photo.id}>
              <PhotoCard
                title={photo.title}
                description={photo.description}
                src={photo.src}
              />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default PhotoGallery;

