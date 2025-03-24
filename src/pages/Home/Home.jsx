import { Box } from '@mui/material';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import ContentSection from '../../components/ContentSection/ContentSection';
import MainPhoto from '../../components/MainPhoto/MainPhoto';

const Home = () => {
  return (
    <Box>
      <MainPhoto/>
      <PhotoGallery />
      <ContentSection />
    </Box>
  );
};

export default Home;