
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const PhotoCard = ({ title, description, src, isComponent = false }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 1,
        '&:hover':{
                  boxShadow: 15,
        },
      }}
    >
      {isComponent ? (
        <Box
          sx={{
            height: 140,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'action.hover',
            borderBottom: '1px solid',
            borderColor: 'divider',
            
            
          }}
        >
          <Typography
            variant="body1"
            align="center"
            sx={{
              p: 1,
              fontWeight: 'medium',
            }}
          >
            COMPONENT
          </Typography>
        </Box>
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={src} // Pass the src prop here
          alt={title}
        />
      )}
      <CardContent sx={{ flexGrow: 1, p: 1 }}>
        <Typography variant="body2" component="div" sx={{ fontWeight: 'medium' }}>
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PhotoCard;
