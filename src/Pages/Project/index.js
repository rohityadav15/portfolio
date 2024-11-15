import { Box, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import ProjectView from "../../components/ProjectView";

const Project = () => {
  const isDesktop = useResponsive();

  return (
    <>
      <Box style={{ height: "80%", Width: "90%" }}>
        <Typography
          variant="h4"
          style={{ margin: 10, height: "20%", textAlign: "center" }}
        >
          My Recent Works
        </Typography>
        <Box
          style={{
            height: isDesktop ? "80%" : "100%",
            width: "90%",
            display: "flex",
            margin: 10,
            paddingBottom: 100,
            justifyContent: isDesktop ? "center" : "center",
            flexDirection: isDesktop ? "row" : "column",
          }}
        >
          <ProjectView
            url="https://gurukulguru.com/dashboard/app"
            imageName="school"
            title="GurukulGuru.com"
            techStack={"Tecnology: ReactJs, Javascript, Redux, Jest."}
            module1="Student Information Management"
            module2="Staff and Teacher Management"
            module3="Fee Management"
            module4="Library Management"
            module5="Expences Management"
            module6="Attendence Management"
            module7="School Kit Management"
          />
          <ProjectView
            url="http://localhost:3000/project"
            imageName="portfolio"
            title="My Portfolio"
            techStack={"Tecnology: ReactJs, Javascript, Redux, Jest."}
            module1="Introduction/About Me"
            module2="Resume/CV"
            module3="Projects"
            module4="Skills and Expertise"
            module5="Contact Information"
            module6="Downloadable Portfolio"
            module7="experience"
          />
        </Box>
      </Box>
    </>
  );
};
export default Project;
