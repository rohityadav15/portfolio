import { Box, Typography } from "@mui/material";
import { LinkedIn, GitHub, Instagram } from "@mui/icons-material/";
import useResponsive from "../../hooks/useResponsive";
const Home = () => {
  const isDesktop = useResponsive();

  return (
    <>
      <Box
        style={{
          display: "flex",
          boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
          borderRadius: "1.5%",
          margin: 20,
          flexDirection: "column",
        }}
      >
        <Box
          style={{
            display: "flex",
            height: "40%",
            width: "100%",
            marginTop: isDesktop ? 50 : 20,
            flexDirection: isDesktop ? "row" : "column",
          }}
        >
          <Box
            style={{
              height: "100%",
              width: isDesktop ? "50%" : "90%",
              display: "flex",
              boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
              borderRadius: "1.5%",
              paddingTop: isDesktop ? 0 : 10,
              alignItems: "center",
              marginLeft: 20,
              flexDirection: "column",
            }}
          >
            <Typography variant="h4"> Hi There!</Typography>
            <Typography variant="h4" style={{ marginBottom: 8, marginTop: 2 }}>
              I'M Rohit Yadav
            </Typography>
            <Box
              style={{
                paddingLeft: isDesktop ? 50 : 5,
                width: isDesktop ? "55%" : "80%",
              }}
            >
              <Typography>
                With over no any experience in web development, I specialize in
                creating immersive user experiences using JavaScript and
                animation libraries. My passion lies in crafting dynamic,
                responsive applications that leverage the latest front-end and
                back-end technologies, ensuring seamless and engaging
                interactions for users.
              </Typography>
            </Box>
          </Box>
          <Box
            style={{
              width: "50%",
              display: "flex",
              paddingTop: isDesktop ? 0 : 5,
              // justifyContent: "center",
              // boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
              // borderRadius: "1.5%",
              marginLeft: 20,
              marginRight: 20,
              alignItems: "ceter",
            }}
          >
            <img
              src="./images/profilePick.jpg"
              height={250}
              width={250}
              alt="User profile"
              style={{ borderRadius: 125, marginLeft: 50 }}
            />
          </Box>
        </Box>
        <Box
          style={{
            height: isDesktop ? "50%" : 250,
            // width: "100%",
            display: "flex",
            textAlign: "center",
            // boxShadow: "0px 4px 10px rgba(2, 2, 2, 2)",
            // borderRadius: "1.5%",
            // margin:20,
            padding: 50,
            marginTop: isDesktop ? 20 : 3,
            alignItem: "center",
            flexDirection: "column",
          }}
        >
          <Box>
            <Typography variant="h6">Get in Touch</Typography>
          </Box>
          <Box>
            Whether you want to get in touch, or talk about a project
            collaboration.
          </Box>
          <Box>
            <Typography>Feel free to connect with me</Typography>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: 10,
            }}
          >
            <Box style={{ padding: 10 }}>
              <a
                href="https://github.com/rohityadav15"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub style={{ fontSize: 40, color: "black" }} />
              </a>
            </Box>
            <Box style={{ padding: 10 }}>
              <a
                href="https://www.instagram.com/royadav1031/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram style={{ fontSize: 40, color: "black" }} />
              </a>
            </Box>
            <Box style={{ padding: 10 }}>
              <a
                href="https://www.linkedin.com/in/rohityadav102002/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn style={{ fontSize: 40, color: "black" }} />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Home;
