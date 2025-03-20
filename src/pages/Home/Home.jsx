import { Box } from '@mui/material';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import ContentSection from '../../components/ContentSection/ContentSection';


const Home = () => {
  return (
    <Box>
      <PhotoGallery />
      <ContentSection />
    </Box>
  );
};

export default Home;