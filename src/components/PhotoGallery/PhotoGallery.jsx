
import { Box, Grid, Typography, Container } from "@mui/material";
import PhotoCard from "../PhotoCard/PhotoCard";

// const DUMMY_PHOTOS = [
//   { id: 1, title: "Sunset Bliss", description: "A breathtaking view of the sunset over the horizon.", src: "/assets/images/photo5.jpg" },
//   { id: 2, title: "Mountain Peaks", description: "Snow-capped mountains standing tall under a clear blue sky.", src: "/assets/images/photo6.jpg" },
//   { id: 3, title: "Serene Lake", description: "A calm and peaceful lake reflecting the surrounding beauty.", src: "/assets/images/photo7.jpg" },
//   { id: 4, title: "City Lights", description: "The city glowing with vibrant lights during the night.", src: "/assets/images/photo8.jpg" },
//   { id: 5, title: "Forest Path", description: "A mysterious path winding through a dense forest.", src: "/assets/images/photo9.jpg" },
//   { id: 6, title: "Golden Fields", description: "Vast fields of golden wheat swaying gently in the breeze.", src: "/assets/images/photo10.jpg" },
// ];
const DUMMY_PHOTOS = [
  {
    id: 1,
    title: "Sunset View of Luxury Penthouse",
    description: "A breathtaking oceanfront penthouse with panoramic sunset views.",
    src: "/assets/images/photo5.jpg"
  },
  {
    id: 2,
    title: "Mountain Peak Chalet",
    description: "Snow-capped mountain home with stunning alpine landscape views.",
    src: "/assets/images/photo6.jpg"
  },
  {
    id: 3,
    title: "Lakeside Serenity",
    description: "A calm and peaceful waterfront property reflecting surrounding natural beauty.",
    src: "/assets/images/photo7.jpg"
  },
  {
    id: 4,
    title: "Urban Nightscape",
    description: "The city glowing with vibrant lights from a modern downtown loft.",
    src: "/assets/images/photo8.jpg"
  },
  {
    id: 5,
    title: "Forest Hideaway",
    description: "A mysterious path winding through a dense, secluded woodland retreat.",
    src: "/assets/images/photo9.jpg"
  },
  {
    id: 6,
    title: "Golden Countryside",
    description: "Vast fields of golden wheat surrounding a charming farmhouse.",
    src: "/assets/images/photo10.jpg"
  }
];



const PhotoGallery = () => {
  return (
    <Box component="section" sx={{ my: 1 }}>
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
