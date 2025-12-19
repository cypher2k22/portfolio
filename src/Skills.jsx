import { Box, Typography, Button } from "@mui/material";

function Skills() {
  const skills = [
    "C",
    "C++",
    "Java",
    "Python",
    "React",
    "Node.js",
    "MySQL",
    "Networking",
    "Arduino"
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(90deg, #070300ff, #7866ffff)",
        color: "white",
        px: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
        SKILLS
      </Typography>

      <Typography variant="h5" sx={{ mb: 4 }}>
        Here are some of my skills.
      </Typography>

      {/* Skill Buttons */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
        {skills.map((skill, index) => (
          <Button
            key={index}
            variant="contained"
            color="secondary"
            sx={{ px: 3, py: 1, fontSize: "0.9rem" }}
          >
            {skill}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
