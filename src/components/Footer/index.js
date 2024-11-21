import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

const Footer = () => {
  const isDesktop = useResponsive();
  return (
    <>
      <Box
        style={{
          height: "10%",
          width: "100%",
          backgroundColor: "black",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Grid container style={{ padding: 20 }}>
          <Grid
            xs={isDesktop ? 3 : 4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              backgroundColor: "black",
            }}
          >
            <Typography
              style={{
                color: "white",
                textDecoration: "none",
                width: "100%",
                textAlign: "center",
              }}
            >
              Doveloped by Rohit Kumar Yadav
            </Typography>
          </Grid>
          <Grid xs={isDesktop ? 7 : 2}></Grid>
          <Grid xs={isDesktop ? 0.5 : 2}>
            <a
              href="https://github.com/rohityadav15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub style={{ fontSize: 30, color: "white" }} />
            </a>
          </Grid>
          <Grid xs={isDesktop ? 0.5 : 2}>
            <a
              href="https://www.instagram.com/royadav1031/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram style={{ fontSize: 30, color: "white" }} />
            </a>
          </Grid>
          <Grid xs={isDesktop ? 0.5 : 2}>
            <a
              href="https://www.linkedin.com/in/rohityadav102002/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn style={{ fontSize: 30, color: "white" }} />
            </a>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Footer;
