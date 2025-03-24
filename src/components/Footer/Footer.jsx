import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    IconButton,
    Stack,
    Divider,
  } from '@mui/material';
  import FacebookIcon from '@mui/icons-material/Facebook';
  import TwitterIcon from '@mui/icons-material/Twitter';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import Faq from '../Faq/Faq';
  
  export  const Footer = () => {
    return (
      <Box
        component="footer"
        sx={{
          py: 4,
          mt: 'auto',
          backgroundColor: 'white',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Faq/>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="div" gutterBottom sx={{ fontWeight: 'bold' }}>
                FOOTER
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph sx={{ maxWidth: '80%' }}>
                Our photography studio captures life's precious moments with artistic flair and professional quality.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                sx={{ mt: 2 }}
              >
                SUBSCRIBE
              </Button>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Typography variant="h6" component="div" gutterBottom>
                ICONS
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <IconButton aria-label="facebook" sx={{ backgroundColor: 'action.hover' }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton aria-label="twitter" sx={{ backgroundColor: 'action.hover' }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton aria-label="instagram" sx={{ backgroundColor: 'action.hover' }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton aria-label="linkedin" sx={{ backgroundColor: 'action.hover' }}>
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          
          <Divider sx={{ mt: 4, mb: 2 }} />
          
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Photo Gallery App. All rights reserved.
          </Typography>
        </Container>
        
      </Box>
    );
  };
  
  export default Footer;
  