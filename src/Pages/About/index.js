import { ArrowForwardRounded } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

const About = () => {
  const isDesktop = useResponsive();

  return (
    <>
      <Box
        style={{
          // display: "flex",
          marginBottom: isDesktop? 120:120,
          margin:20,
          width: isDesktop? "100%" : "80%",
          boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          borderRadius: "1.5%",
        }}
      >
        <Box
          style={{
            display: "flex",
            width: isDesktop ? "90%" : "90%",
            flexDirection: isDesktop ? "row" : "column-reverse",
          }}
        >
          <Box
            style={{
              width: isDesktop ? "50%" : "90%",
              display: "flex",
              padding: 10,
              margin: 20,
              marginBottom: 0,
              justifyContent: "right",
            }}
          >
            <Box
              style={{
                height: "25%",
                width: isDesktop ? "60%" : "100%",
              }}
            >
              <Typography variant="h3">About Me</Typography>
              <Typography style={{ textAlign: "left" }}>
                I am<b> Rohit Kumar Yadav</b> from <b>Lucknow,India.</b>
              </Typography>
              <Typography style={{ textAlign: "left" }}>
                Software Engineer who loves to transform ideas into reality
                using code.
              </Typography>
              <Typography>
                Motivated designer and Doveloper and create website with
                React.js, HTML, CSS, JavaScript
              </Typography>
              <Typography style={{ textAlign: "left" }}>
                Apart from coding, some other activities that I love to do!
              </Typography>
              <Stack direction={"row"}>
                <ArrowForwardRounded />
                <Typography>Playing Games</Typography>
              </Stack>
              <Stack direction={"row"}>
                <ArrowForwardRounded />
                <Typography>Watching Movies</Typography>
              </Stack>
              <Stack direction={"row"}>
                <ArrowForwardRounded />
                <Typography>Travelling</Typography>
              </Stack>
            </Box>
          </Box>
          <Box
            style={{
              height: "25%",
              width: "50%",
            }}
          >
            <img
              src="./images/about.jpg"
              alt="about profile"
              style={{
                marginLeft: isDesktop ? 50 : 10,
                height: 300,
                width: isDesktop ? 500 : 350,
              }}
            />
          </Box>
        </Box>
        <Box
          style={{
            height: isDesktop ? "40%" : "60%",
            width: isDesktop ? "100%" : "90%",
            display: "flex",
            marginBottom: isDesktop ? 80 : 0,
            flexDirection: isDesktop ? "row" : "column",
          }}
        >
          <Box
            style={{
              width: "50%",
              display:isDesktop ? "flex" : "0",
              marginBottom: isDesktop ? "30" : "0",
              justifyContent: "right",
            }}
          >
            <Box
              style={{
                display: "flex",
                width: isDesktop ? "60%" : "60%",
                padding: isDesktop ? 10 : 10,
                marginLeft:30,
                flexDirection: "column",
              }}
            >
              <Typography variant="h4">Profesional Skills</Typography>
              <li>React.js</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Matrial UI</li>
            </Box>
          </Box>
          <Box
            style={{
              height: "100%",
              width: isDesktop ? "50%" : "90%",
            }}
          >
            <Box
              style={{
                height: isDesktop ? "100%" : 300,
                width: isDesktop ? "50%" : "90%",
                padding: isDesktop ? 10 : 40,
              }}
            >
              <Typography variant="h4">Tools I Use</Typography>
              <li>Visual Studio</li>
              <li>Git</li>
              <li>Chrome DevTools</li>
              <li>Npm (Node Package Manager)</li>
              <li>Atom</li>
              <li>Sublime Text</li>
              <li>Postman</li>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default About;
