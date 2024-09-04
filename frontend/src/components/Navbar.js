import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

// The navigation bar that is displayed on the top of the webpage.

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{ flexDirection: "column", alignItems: "center", margin: 3 }}
      >
        <Typography
          variant="h6"
          component="div"
          textAlign="center"
          sx={{ marginBottom: 2 }}
        >
          Satu's Weather App for Outdoor Activities
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to="/"
            sx={{ backgroundColor: "DodgerBlue" }}
          >
            Weather
          </Button>

          <Button
            variant="contained"
            component={Link}
            to="activitiespage"
            sx={{ backgroundColor: "DodgerBlue" }}
          >
            My Activities
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
