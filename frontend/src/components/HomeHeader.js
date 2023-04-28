import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Paper,
  Typography,
  List,
  Stack,
  Grid,
  Divider,
  Box,
  ListItem,
} from "@mui/material";
import SpaIcon from "@mui/icons-material/SpaOutlined";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMakerOutlined";
import MicrowaveIcon from "@mui/icons-material/MicrowaveOutlined";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import DevicesIcon from "@mui/icons-material/Devices";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SportsEsportsIcon from "@mui/icons-material/SportsEsportsOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";

import CategoryListItem from "./CategoryListItem";
import HotCategoryGridItem from "./HotCategoryGridItem";

import { loadTopRatedProducts } from "../store/products";

const HomeHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTopRatedProducts());
  }, [dispatch]);

  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const handleCategoryLeave = () => {
    setActiveCategory(null);
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        height: "295px",
      }}
    >
      <Stack direction="row" width="40%">
        <List
          sx={{
            width: activeCategory ? "50%" : "100%",
            cursor: "pointer",
            "& .MuiListItem-root": {
              paddingTop: 0.5,
              paddingBottom: 0.5,
            },
          }}
          component={Paper}
        >
          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Health & Beauty"}
            label={"Health & Beauty"}
          >
            <SpaIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Home & Office"}
            label={"Home & Office"}
          >
            <CoffeeMakerIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Appliances"}
            label={"Appliances"}
          >
            <MicrowaveIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Phones & Tablets"}
            label={"Phones & Tablets"}
          >
            <SmartphoneIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Computing"}
            label={"Computing"}
          >
            <DevicesIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"TVs & Audio"}
            label={"TVs & Audio"}
          >
            <LiveTvIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Fashion"}
            label={"Fashion"}
          >
            <CheckroomIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Gaming"}
            label={"Gaming"}
          >
            <SportsEsportsIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Baby Products"}
            label={"Baby Products"}
          >
            <ChildCareIcon fontSize="small" />
          </CategoryListItem>

          <CategoryListItem
            onMouseEnter={() => handleCategoryHover("Health)")}
            onMouseLeave={() => handleCategoryLeave()}
            category={"Sporting Goods"}
            label={"Sporting Goods"}
          >
            <FitnessCenterIcon fontSize="small" />
          </CategoryListItem>
        </List>
        <Divider orientation="vertical" flexItem />

        {activeCategory && (
          <Paper sx={{ width: "50%" }}>
            <List>
              <ListItem>Tada</ListItem>
              <ListItem>Tada</ListItem>
            </List>
          </Paper>
        )}
      </Stack>

      <Box
        sx={{
          width: "80%",
          bgcolor: "white",
          padding: 1,
          borderRadius: "5px",
          visibility: "visible",
        }}
      >
        <Stack direction="row" spacing={1} paddingTop={1}>
          <LocalFireDepartmentIcon sx={{ color: "red" }} fontSize="large" />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 550,
            }}
          >
            Hot Categories
          </Typography>
        </Stack>

        <Grid
          container
          spacing={1}
          height={"80%"}
          sx={{
            borderRadius: "5px",
            marginTop: 1,
            marginLeft: 0.1,
            paddingRight: 1,
            "& .MuiGrid-item": {
              width: "20%",
              height: "50%",
              padding: 2,
              "&:hover": {
                elevation: 1,
                boxShadow: 1,
                transform: "scale(1.02)",
              },
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "1px solid #e0e0e0",
            },
          }}
        >
          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/laptops.jpg"
            label="Laptops"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/phones.jpg"
            label="Phones"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/tvs.webp"
            label="TVs"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/kitchen.png"
            label="Kitchen"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/home.webp"
            label="Home"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/shoes.webp"
            label="Shoes"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/fifa23.png"
            label="Games"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/home-audio.png"
            label="Audio"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/skin-care.webp"
            label="Skin care"
          />

          <HotCategoryGridItem
            image="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/categories/fitness.jpg"
            label="Fitness"
          />
        </Grid>
      </Box>
    </Stack>
  );
};

export default HomeHeader;
