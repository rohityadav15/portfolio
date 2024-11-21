import { Box, Button, Typography } from "@mui/material";
import useResponsive from "../../hooks/useResponsive";

const ProjectView = ({
  url,
  imageName,
  title,
  techStack,
  module1,
  module2,
  module3,
  module4,
  module5,
  module6,
  module7,
}) => {
  const isDesktop = useResponsive();
  const handleProject = () => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Box
        style={{
          border: "2px solid light grey",
          height: "50%",
          width: isDesktop ? "20%" : "90%",
          textAlign: "center",
          margin: isDesktop ? 10 : 10,
          marginBottom: 20,
          padding: 10,
        }}
      >
        <img
          src={`./images/${imageName}.jpeg`}
          height={200}
          width={250}
          alt="school profile"
          style={{ padding: 2 }}
        />
        <Typography variant="h5">{title}</Typography>
        <Box
          style={{
            padding: isDesktop ? 3 : 5,
            textAlign: "left",
          }}
        >
          <Typography margin={1} style={{ fontWeight: "bold" }}>
            {techStack}
          </Typography>
          <Typography>
            <li>{module1}</li>
            <li>{module2} </li>
            <li>{module3} </li>
            <li>{module4} </li>
            <li>{module5}</li>
            <li>{module6} </li>
            <li>{module7} </li>
          </Typography>
        </Box>
        <Button
          onClick={handleProject}
          variant="contained"
          sx={{ marginBottom: 1 }}
        >
          View Project
        </Button>
      </Box>
    </>
  );
};
export default ProjectView;
