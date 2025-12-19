import { Box, Typography, Button } from "@mui/material";

function Home() {
  return (
    <>
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
        Hi, I am KARTHIGAN
      </Typography>
      <Typography variant="h5" sx={{ mb: 4 }}>
        A Computer Engineering undergraduate at University of Sri Jayewardenepura
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ px: 4, py: 1, fontSize: "1rem" }}
      >
        Explore My Portfolio
      </Button>
    </Box>
   
    </>

  );
}

export default Home;
