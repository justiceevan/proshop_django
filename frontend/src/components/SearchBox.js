import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  IconButton,
  TextField,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      navigate(`/?q=${searchQuery}`);
    } else {
      navigate(pathname);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: isMobile || isTablet ? "80%" : "300px" }}
    >
      <TextField
        type="search"
        className="me-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        variant="outlined"
        placeholder="Looking for..."
        size="small"
        fullWidth
        sx={{
          input: {
            color: "white",
          },
          maxWidth: isMobile ? "100%" : "300px",
          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "white",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#4a4a4a",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "white",
            },
        }}
        InputProps={
          isMobile || isTablet
            ? {
                endAdornment: (
                  <IconButton
                    type="submit"
                    sx={{
                      transform: "translateX(10px)",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    <SearchIcon fontSize="small" />
                  </IconButton>
                ),
              }
            : {
                endAdornment: (
                  <Button
                    type="submit"
                    sx={{
                      transform: "translateX(10px)",
                    }}
                    color="success"
                    variant="contained"
                  >
                    <SearchIcon fontSize="small" />

                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "550",
                      }}
                    >
                      Search
                    </Typography>
                  </Button>
                ),
              }
        }
      />
    </form>
  );
};

export default SearchBox;
