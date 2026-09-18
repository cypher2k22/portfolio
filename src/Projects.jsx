import { Box, Button, Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";

const projects = [
  {
    title: "BusTrack",
    description: "Real-time public transport platform connecting passengers, drivers, and administrators.",
    stack: ["React Native", "TypeScript", "Node.js", "Firebase", "Google Maps"],
    link: "https://github.com/cypher2k22/BUS_TRACKER_PRO",
  },
  {
    title: "Task Management System",
    description: "Full-stack application structured around a separate frontend, backend, and API-driven workflow.",
    stack: ["Python", "Frontend", "REST API"],
    link: "https://github.com/cypher2k22/taskmanagement",
  },
  {
    title: "IntelliGate",
    description: "Access-control system combining software, computer vision, databases, mobile workflows, and IoT hardware.",
    stack: ["Python", "OpenCV", "Raspberry Pi", "Database", "IoT"],
    link: "https://github.com/cypher2k22/intelligatetrial",
  },
  {
    title: "Student Performance Analysis",
    description: "Python analysis project exploring relationships between preparation, demographics, and academic scores.",
    stack: ["Python", "Pandas", "Data Analysis"],
    link: "https://github.com/cypher2k22/Students-Performance-analyse-in-Exams",
  },
];

function Projects() {
  return (
    <Box className="section">
      <Typography className="eyebrow">SELECTED WORK</Typography>
      <Typography variant="h2">Projects</Typography>
      <Typography className="section-copy">A small selection of projects that show different areas of engineering.</Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.title}>
            <Card className="project-card">
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>{project.title}</Typography>
                <Typography sx={{ my: 2 }}>{project.description}</Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 2 }}>
                  {project.stack.map((x) => <Chip key={x} label={x} size="small" />)}
                </Stack>
                <Button href={project.link} target="_blank">View repository →</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
