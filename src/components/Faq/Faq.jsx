
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Dummy FAQ data
const faqData = [
    {
      id: 1,
      question: "What photography services do you offer?",
      answer: "We offer a wide range of photography services including portrait photography, wedding photography, event coverage, commercial photography, and product photography. Our team of experienced photographers can cater to your specific needs and preferences."
    },
    {
      id: 2,
      question: "How far in advance should I book a photography session?",
      answer: "For portrait sessions, we recommend booking at least 2-3 weeks in advance. For weddings and major events, we suggest booking 3-6 months ahead to ensure availability. For urgent requests, please contact us directly, and we'll do our best to accommodate your needs."
    },
    {
      id: 3,
      question: "What is included in your photography packages?",
      answer: "Our standard packages include the photography session, professional editing of selected photos, digital delivery of high-resolution images, and printing rights. Premium packages may include additional services such as physical prints, photo albums, or extended session times. Custom packages are available upon request."
    },
    {
      id: 4,
      question: "Do you offer photo printing services?",
      answer: "Yes, we offer professional photo printing services in various sizes and finishes. We work with top-quality print labs to ensure your images look stunning whether displayed on your wall or in an album. We can also recommend trusted third-party print services if you prefer."
    },
    {
      id: 5,
      question: "What is your cancellation policy?",
      answer: "We understand that circumstances change. For cancellations made at least 7 days before your scheduled session, we offer a full refund of your deposit. Cancellations within 7 days of your session may result in a partial refund or credit toward a future session, depending on the circumstances."
    },
    {
      id: 6,
      question: "How long does it take to receive my photos after a session?",
      answer: "Delivery times vary based on the type of photography service. For standard portrait sessions, you can expect to receive your edited digital images within 1-2 weeks. For weddings and larger events, delivery typically takes 3-4 weeks. Rush processing is available for an additional fee if you need your photos sooner."
    },
    {
      id: 7,
      question: "Do you travel for photography sessions?",
      answer: "Absolutely! We're happy to travel to your preferred location. Travel within 30 miles of our studio is included in our standard rates. For destinations beyond this range, additional travel fees may apply based on distance and travel time. For destination weddings or international shoots, please contact us for a custom quote."
    },
    {
      id: 8,
      question: "What should I wear for my portrait session?",
      answer: "We recommend wearing outfits that make you feel comfortable and confident. Solid colors typically photograph well, while busy patterns can be distracting. For family or group photos, coordinating colors (rather than exact matching) creates visual harmony. We're happy to provide a detailed style guide before your session or discuss specific outfit choices during your consultation."
    },
    {
      id: 9,
      question: "Can I request specific editing styles for my photos?",
      answer: "Yes! During your consultation, we'll discuss your preferred editing style. We offer classic, true-to-life editing as our standard, but can accommodate requests for film emulation, black and white, vintage effects, or other stylistic preferences. We encourage you to share examples of styles you love so we can align our editing with your vision."
    },
    {
      id: 10,
      question: "Do you offer videography services alongside photography?",
      answer: "Yes, we offer professional videography services that can be added to any photography package or booked separately. Our video services include event coverage, promotional videos, and cinematic storytelling. We provide fully edited video content with options for different lengths, from highlight reels to feature-length documentation."
    },
    {
      id: 11,
      question: "What equipment do your photographers use?",
      answer: "Our photographers work with professional-grade equipment including full-frame Canon and Sony cameras, a variety of prime and zoom lenses, and professional lighting gear. We always bring backup equipment to every shoot to ensure technical difficulties never compromise your photos. Our equipment is regularly maintained and updated to maintain the highest quality standards."
    },
    {
      id: 12,
      question: "Do you offer photo retouching services?",
      answer: "All of our photos include basic retouching such as color correction, exposure adjustments, and minor blemish removal. For more extensive retouching needs like skin smoothing, body contouring, or background manipulation, we offer premium retouching services at an additional cost. We strive to enhance natural beauty while maintaining an authentic look in all our images."
    }
];

export const FAQ = () => {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return(
    <Box
      sx={{
        py: 6,
        backgroundColor: '#f8f8f8',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 4, fontWeight: 'bold' }}
        >
          Frequently Asked Questions
        </Typography>

        {faqData.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === `panel${faq.id}`}
            onChange={handleChange(`panel${faq.id}`)}
            sx={{
              mb: 2,
              boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
              '&:before': { display: 'none' },
              borderRadius: '8px !important',
              overflow: 'hidden',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${faq.id}-content`}
              id={`panel${faq.id}-header`}
              sx={{
                backgroundColor: 'rgb(25, 118, 210)',
                color: 'white',
                '&:hover': { backgroundColor: 'rgb(21, 101, 192)' },
                '& .MuiSvgIcon-root': {
                  color: 'white',
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 2, pb: 3, px: 3 }}>
              <Typography variant="body1" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Still have questions?
          </Typography>
          <Typography 
            variant="body2" 
            color="primary" 
            sx={{ 
              cursor: 'pointer', 
              fontWeight: 'bold',
              '&:hover': { textDecoration: 'underline' } 
            }}
          >
            Contact our support team
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;