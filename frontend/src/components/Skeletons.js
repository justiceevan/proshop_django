import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Skeleton,
  Grid,
  Paper,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const SkeletonWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const ProductSkeleton = () => {
  return (
    <Box
      sx={{
        margin: 0,
        cursor: "pointer",
        "&:hover": {
          boxShadow: 4,
          transform: "scale(1.02)",
          "& .MuiButton-root": {
            visibility: "visible",
          },
        },
      }}
      boxShadow={1}
    >
      <Card sx={{ margin: 0, height: "355px" }}>
        <Skeleton variant="rectangular" height="180px" animation="wave" />
        <CardContent>
          <SkeletonWrapper>
            <Skeleton variant="text" width="100%" animation="wave" />
            <Skeleton variant="text" width="100%" animation="wave" />

            <Stack direction="row" spacing={0.5}>
              <Skeleton variant="text" width="8px" animation="wave" />
              <Skeleton variant="text" width="8px" animation="wave" />
              <Skeleton variant="text" width="8px" animation="wave" />
              <Skeleton variant="text" width="8px" animation="wave" />
              <Skeleton variant="text" width="8px" animation="wave" />
              <Skeleton
                variant="text"
                width="30px"
                animation="wave"
                sx={{ ml: 1 }}
              />
            </Stack>

            <Skeleton
              variant="text"
              width="40%"
              height="40px"
              animation="wave"
            />
            <Skeleton
              variant="text"
              width="80%"
              height="40px"
              animation="wave"
              sx={{ marginTop: 1, alignSelf: "center" }}
            />
          </SkeletonWrapper>
        </CardContent>
      </Card>
    </Box>
  );
};

const HomePageHeaderCategorySkeleton = () => {
  const [categoryHovered, setCategoryHovered] = useState(false);

  const handleCategoryHover = () => {
    setCategoryHovered(true);
  };

  const handleCategoryLeave = () => {
    setCategoryHovered(false);
  };

  return (
    <Stack
      direction="row"
      bgcolor="white"
      height="295px"
      width="40%"
      sx={{ cursor: "pointer", borderRadius: "5px" }}
      boxShadow={1}
    >
      <Box
        onMouseEnter={handleCategoryHover}
        onMouseLeave={handleCategoryLeave}
        sx={{
          width: categoryHovered ? "50%" : "100%",
          cursor: "pointer",
          padding: 2,
        }}
        component={Paper}
      >
        {[...Array(10)].map((_, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={1}
            width="100%"
            height="27px"
          >
            <Skeleton variant="text" width="20px" animation="wave" />
            <Skeleton
              key={index}
              variant="text"
              animation="wave"
              width="180px"
            />
          </Stack>
        ))}
      </Box>

      <Divider orientation="vertical" flexItem />

      {categoryHovered && (
        <Box
          width="50%"
          onMouseEnter={handleCategoryHover}
          onMouseLeave={handleCategoryLeave}
          sx={{
            padding: 2,
          }}
          component={Paper}
        >
          {[...Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              variant="text"
              animation="wave"
              width="100%"
              height="20px"
            />
          ))}
        </Box>
      )}
    </Stack>
  );
};

const CategoryGridItemSkeleton = () => {
  return (
    <Stack direction="column" spacing={1} width="100%" alignItems="center">
      <Skeleton
        variant="circular"
        width="60px"
        height="60px"
        animation="wave"
      />
      <Skeleton variant="text" width="75%" height="18px" animation="wave" />
    </Stack>
  );
};

const HomePageHotCategoriesSkeleton = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        paddingTop={1}
        paddingX={1}
        alignItems="center"
      >
        <Skeleton variant="circular" width="35px" height="35px" />
        <Skeleton variant="text" width="30%" height="40px" />
      </Stack>

      <Grid
        container
        spacing={1}
        height={"80%"}
        sx={{
          borderRadius: "5px",
          marginTop: 1,
          marginLeft: 0.1,
          paddingRight: 0.5,
          "& .MuiGrid-item": {
            width: "20%",
            height: "50%",
            padding: 2,
            "&:hover": {
              elevation: 3,
              boxShadow: 3,
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
        {Array.from({ length: isDesktop ? 10 : 8 }, (_, i) => (
          <Grid item key={i} xs={isMobile ? 3 : 0}>
            <CategoryGridItemSkeleton />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export {
  ProductSkeleton,
  HomePageHeaderCategorySkeleton,
  HomePageHotCategoriesSkeleton,
};
