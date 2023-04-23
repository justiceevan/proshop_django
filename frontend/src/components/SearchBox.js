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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      navigate(`/?q=${searchQuery}`);
    } else {
      navigate(pathname);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="search"
        className="me-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        variant="outlined"
        placeholder="Looking for..."
        size="small"
        sx={{
          input: {
            color: "white",
          },
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
          isMobile
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
