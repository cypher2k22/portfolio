import { Box, Button, Stack, Typography } from "@mui/material";

function Contact() {
  return (
    <Box className="contact section">
      <Typography className="eyebrow">LET'S CONNECT</Typography>
      <Typography variant="h2">Build something useful.</Typography>
      <Typography className="section-copy">
        I'm interested in software engineering internships, collaborative projects, and opportunities to keep growing as an engineer.
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap sx={{ mt: 3 }}>
        <Button variant="contained" href="mailto:bakeekarthigan@gmail.com">Email</Button>
        <Button variant="outlined" href="https://github.com/cypher2k22" target="_blank">GitHub</Button>
        <Button variant="outlined" href="https://www.linkedin.com/in/bakeerathan-karthigan-529a56256" target="_blank">LinkedIn</Button>
      </Stack>
    </Box>
  );
}

export default Contact;
