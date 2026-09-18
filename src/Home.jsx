import { Box, Button, Chip, Stack, Typography } from "@mui/material";

function Home({ onProjects }) {
  return (
    <Box className="hero">
      <Typography className="eyebrow">COMPUTER ENGINEERING • SOFTWARE DEVELOPMENT</Typography>
      <Typography variant="h1">Hi, I'm <span>Karthigan.</span></Typography>
      <Typography className="hero-copy">
        I build full-stack applications, real-time systems, and practical software
        with a focus on clean architecture and problem solving.
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 4 }}>
        {["C++", "Java", "Python", "React", "Node.js", "SQL"].map((x) => <Chip key={x} label={x} />)}
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="large" onClick={onProjects}>View Projects</Button>
        <Button variant="outlined" size="large" href="https://github.com/cypher2k22" target="_blank">GitHub</Button>
      </Stack>
      <Typography className="hero-meta">University of Sri Jayewardenepura • Expected graduation 2028</Typography>
    </Box>
  );
}

export default Home;
