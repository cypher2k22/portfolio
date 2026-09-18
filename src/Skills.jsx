import { Box, Chip, Grid, Typography } from "@mui/material";

const groups = {
  Languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  Frontend: ["React", "React Native", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "REST APIs"],
  Data: ["MySQL", "Firebase", "Firestore"],
  Systems: ["Networking", "Linux", "Raspberry Pi", "Arduino"],
  Tools: ["Git", "GitHub", "Docker", "Vite"],
};

function Skills() {
  return (
    <Box className="section">
      <Typography className="eyebrow">TECHNICAL TOOLKIT</Typography>
      <Typography variant="h2">Skills</Typography>
      <Typography className="section-copy">Technologies I use while building academic, personal, and team projects.</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {Object.entries(groups).map(([group, skills]) => (
          <Grid item xs={12} sm={6} md={4} key={group}>
            <Box className="skill-group">
              <Typography variant="h6">{group}</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                {skills.map((skill) => <Chip key={skill} label={skill} variant="outlined" />)}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
