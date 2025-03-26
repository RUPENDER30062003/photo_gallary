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

// Real Estate FAQ Data
const faqData = [
  {
      id: 1,
      question: "What services do you offer for home buyers?",
      answer: "We provide comprehensive home buying services including property search, market analysis, negotiation support, home inspection guidance, and end-to-end transaction assistance. Our team helps you find the perfect property, navigate the buying process, and make informed decisions."
  },
  {
      id: 2,
      question: "How long does the home buying process typically take?",
      answer: "The home buying process usually takes 2-3 months from start to closing. This includes getting pre-approved for a mortgage (1-2 weeks), searching for properties (4-8 weeks), making an offer, completing home inspections, and finalizing the transaction. We guide you through each step to ensure a smooth experience."
  },
  {
      id: 3,
      question: "What are the costs involved in buying a home?",
      answer: "Beyond the home's purchase price, expect additional costs such as closing costs (2-5% of home price), home inspection fees, property taxes, homeowners insurance, potential HOA fees, and moving expenses. We provide a detailed breakdown of expected costs to help you budget effectively."
  },
  {
      id: 4,
      question: "Do you assist with selling my property?",
      answer: "Yes, we offer comprehensive selling services including professional home valuation, strategic pricing, professional photography, targeted marketing, home staging advice, negotiation support, and full transaction management. Our goal is to maximize your property's value and ensure a smooth selling process."
  },
  {
      id: 5,
      question: "What is your commission structure?",
      answer: "Our commission is typically a percentage of the final sale price, standard in the real estate industry. We offer transparent pricing and can discuss our commission structure during an initial consultation. Our fees include a full range of services designed to get you the best possible outcome."
  },
  {
      id: 6,
      question: "How do you determine the right listing price for my home?",
      answer: "We conduct a comprehensive Comparative Market Analysis (CMA) that considers recent sales of similar properties in your neighborhood, current market conditions, your home's unique features, recent improvements, and local economic factors. Our pricing strategy aims to attract buyers while maximizing your property's value."
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
        // backgroundColor: '#f8f8f8',
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
                // backgroundColor: 'rgb(25, 118, 210)',
                // color: 'white',
                // '&:hover': { backgroundColor: 'rgb(21, 101, 192)' },
                // '& .MuiSvgIcon-root': {
                //   color: 'white',
                // }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 500  }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 2, pb: 3, px: 3}}>
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