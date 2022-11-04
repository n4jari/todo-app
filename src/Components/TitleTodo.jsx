import { Typography } from "@mui/material";
const TitleTodo = () => {
  return (
    <Typography
      variant="h5"
      sx={{
        textAlign: "center",
        my: { xs: 5, sm: 6, md: 6, lg: 5, xl: 5 },
      }}
    >
      What's the plan for Today?
    </Typography>
  );
};

export default TitleTodo;
