import React from "react";
import { Link } from "react-router-dom";
import { ListItem, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const CategoryListItem = ({
  category,
  children,
  label,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <ListItem
      sx={{
        "&:hover": {
          "& .MuiSvgIcon-root": {
            color: grey[400],
          },
          "& .MuiTypography-root": {
            color: grey[400],
          },
        },
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        to={`/category?query=${category}`}
        style={{ textDecoration: "none" }}
      >
        <Stack direction="row" spacing={0.5}>
          {children}
          <Typography variant="body1" sx={{ fontSize: 13, fontWeight: 500 }}>
            {label}
          </Typography>
        </Stack>
      </Link>
    </ListItem>
  );
};

export default CategoryListItem;
