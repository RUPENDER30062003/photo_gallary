import { Box, Grid, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

const ContentSection = () => {
  return (
    <Box component="section" sx={{ my: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Photo 2 Section */}
          <Grid item xs={12} md={6}>
            <Card 
              elevation={0} 
              sx={{ 
                height: '100%', 
                border: '1px solid', 
                borderColor: 'divider' 
              }}
            >
              <CardMedia
                component="img"
                height="300"
                src='../../assets/images/photo11.jpg'
                alt="Photo "
                sx={{ 
                  backgroundColor: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              />
              
            </Card>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Card 
              elevation={0} 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                border: '1px solid', 
                borderColor: 'divider',
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                
                <Typography variant="h5" component="div" gutterBottom>
                Majestic Heritage: A Timeless Architectural Marvel
                </Typography>

                <Typography variant="body2" color="text.secondary" paragraph>
                  This image showcases an elegant architectural landmark, likely a historical palace or government building. 
                </Typography>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                It features grand columns, intricate sculptures, and a prominent clock tower, symbolizing classical European architecture.
                </Typography>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                The building is framed by lush green trees, creating a serene yet majestic ambiance.
                  </Typography>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                A flag atop the structure suggests it holds national significance.
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                This place likely serves as a hub of historical and cultural importance, attracting visitors and symbolizing power and tradition.
                </Typography>

              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </Container>
      
    </Box>
  );
};

export default ContentSection;