import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const imageUrl =
  process.env.NODE_ENV === "production"
    ? "https://proeshopstorage.blob.core.windows.net/proshopcontainer/404.png"
    : "/images/404.png";

const PageNotFound = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" component="div" sx={{ fontWeight: 550 }}>
        Page not found
      </Typography>
      <img
        src={imageUrl}
        alt="404 Page Not Found"
        style={{ maxWidth: "60%", height: "auto" }}
        className="my-3"
        loading="lazy"
      />
      <Typography variant="body2">
        The page you are looking for could not be found.
      </Typography>

      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{ fontWeight: 550, mt: 3 }}
        color="inherit"
      >
        Go To Homepage
      </Button>
    </Box>
  );
};

export default PageNotFound;
