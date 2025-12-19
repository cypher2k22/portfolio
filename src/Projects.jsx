import { Box, Typography, Button } from "@mui/material";

function Projects() {
    return (
        
           < Box
      sx={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "top",
        paddingTop: "100px",
        alignItems: "center",
        textAlign: "left",
        background: "linear-gradient(90deg, #070300ff, #7866ffff)",
        color: "white",
        px: 2,
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700, mb: 2 }}>
        MY PROJECTS
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        Here  are some of my projects.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        padding="10px"
        margin="10px"
        sx={{ px: 4, py: 1, fontSize: "1rem" }}
      >
        project 1
      </Button>
        <Button
        variant="contained"
        color="secondary"
        padding="10px"
        sx={{ px: 4, py: 1, fontSize: "1rem" }} 
      >
        project 2
      </Button> 
      <Button
        variant="contained"
        color="secondary"
        padding="10px"
        margin="10px"
        sx={{ px: 4, py: 1, fontSize: "1rem" }}
      >
        project 3
      </Button>
        <Button
        variant="contained"
        color="secondary"
        padding="10px"
        margin="10px"
        sx={{ px: 4, py: 1, fontSize: "1rem" }} 
      >
        project 4
      </Button> 
     
    </Box>
        
    );
}
export default Projects