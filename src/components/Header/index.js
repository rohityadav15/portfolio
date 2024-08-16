import { Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

const Header = () => {
  const isDesktop=useResponsive();

  return (
    <Box
      style={{
        display: "flex",
        height: "10%",
        backgroundColor: "black",
      }}
    >
      <Grid container>
        <Grid
          xs={isDesktop?0.8:2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              width: "100%",
              padding: "15px 0",
              textAlign: "center",
            }}
          >
            Home
          </Link>
        </Grid>
        <Grid
          xs={isDesktop?0.8:2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
          <Link
            to="/about"
            style={{
              color: "white",
              textDecoration: "none",
              width: "100%",
              padding: "15px 0",
              textAlign: "center",
            }}
          >
            About
          </Link>
        </Grid>
        <Grid
          xs={isDesktop?0.8:2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
          <Link
            to="/project"
            style={{
              color: "white",
              textDecoration: "none",
              width: "100%",
              padding: "15px 0",
              textAlign: "center",
            }}
          >
            Project
          </Link>
        </Grid>
        \<Grid
          xs={isDesktop?0.8:2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            backgroundColor: "black",
          }}
        >
          <Link
            to="/contact"
            style={{
              color: "white",
              textDecoration: "none",
              width: "100%",
              padding: "15px 0",
              textAlign: "center",
            }}
          >
            Contact
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Header;