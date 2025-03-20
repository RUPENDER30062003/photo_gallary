
import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
} from "@mui/material";

// Dummy Data for Team Members
const TEAM_MEMBERS = [
  { id: 1, name: "John Do", designation: "Full Stack Developer", linkedin: "https://www.linkedin.com/in/johndoe", contact: "+1 234-567-8901", color: "#FFC1C1" },
  { id: 2, name: "Jane Smith", designation: "UI/UX Designer", linkedin: "https://www.linkedin.com/in/janesmith", contact: "+1 987-654-3210", color: "#FFD59A" },
  { id: 3, name: "Emily Johnson", designation: "Data Scientist", linkedin: "https://www.linkedin.com/in/emilyjohnson", contact: "+1 555-123-4567", color: "#C1E1C1" },
  { id: 4, name: "Michael Brown", designation: "Project Manager", linkedin: "https://www.linkedin.com/in/michaelbrown", contact: "+1 444-987-6543", color: "#C1D5E0" },
  { id: 5, name: "Olivia Wilson", designation: "DevOps Engineer", linkedin: "https://www.linkedin.com/in/oliviawilson", contact: "+1 333-222-1111", color: "#E1C1E1" },
  { id: 6, name: "Liam Davis", designation: "Cloud Architect", linkedin: "https://www.linkedin.com/in/liamdavis", contact: "+1 666-123-4567", color: "#F7C8E0" },
  { id: 7, name: "Sophia Moore", designation: "Frontend Developer", linkedin: "https://www.linkedin.com/in/sophiamoore", contact: "+1 777-987-6543", color: "#B4E5EF" },
  { id: 8, name: "William Taylor", designation: "Backend Developer", linkedin: "https://www.linkedin.com/in/williamtaylor", contact: "+1 888-654-3210", color: "#FCE1A8" },
  { id: 9, name: "Isabella Martinez", designation: "Quality Analyst", linkedin: "https://www.linkedin.com/in/isabellamartinez", contact: "+1 999-555-1234", color: "#C8C1F7" },
  { id: 10, name: "James Anderson", designation: "Product Manager", linkedin: "https://www.linkedin.com/in/jamesanderson", contact: "+1 123-456-7890", color: "#E8C1C1" },
];

const ContactPage = () => {
  return (
    <Box component="section" sx={{ my: 4 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h3"
            fontWeight="bold"
            color="rgb(25, 118, 210)"
            gutterBottom
          >
            Meet Our Team
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Passionate professionals dedicated to achieving excellence in every project.
          </Typography>
        </Box>

        {/* Team Member Cards */}
        <Grid container spacing={4}>
          {TEAM_MEMBERS.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.id}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#e3f2fd",
                  color: "rgb(25, 118, 210)",
                  height: "100%",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      backgroundColor: member.color,
                      fontSize: "1.5rem",
                    }}
                  >
                    {member.name.split(" ")[0][0]}{member.name.split(" ")[1][0]}
                  </Avatar>
                </Box>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="body1">{member.designation}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1 }}
                    color="textSecondary"
                  >
                    Contact: {member.contact}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mt: 1 }}
                    color="textSecondary"
                  >
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "rgb(25, 118, 210)" }}
                    >
                      LinkedIn Profile
                    </a>
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

export default ContactPage;
