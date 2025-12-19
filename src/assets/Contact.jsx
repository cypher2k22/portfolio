import React from "react";
import {  Typography, Button, Stack } from "@mui/material";

function Contact() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #070300, #7866ff)",
        color: "white",
        px: 2,
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 700, mb: 4 }}>
        Contact Me
      </Typography>

      <Stack spacing={2} direction="column" alignItems="center">
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/cypher2k22"
          target="_blank"
        >
          GitHub
        </Button>

        <Button
          variant="contained"
          color="secondary"
          href="https://www.linkedin.com/in/bakeerathan-karthigan-529a56256"
          target="_blank"
        >
          LinkedIn
        </Button>

        <Button
          variant="contained"
          href="mailto:bakeekarthigan@gmail.com"
        >
          Email Me
        </Button>
        <Button
          variant="contained"
          href="https://www.instagram.com/bakeerathan_karthigan/"
        >
          INSTAGRAM
        </Button>
      </Stack>
     
    </Box>
  );
}

export default Contact;


import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

