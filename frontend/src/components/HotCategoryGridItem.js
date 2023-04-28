import { Grid, Stack, Typography } from "@mui/material";

const HotCategoryGridItem = ({ image, label }) => {
  return (
    <Grid item>
      <Stack direction="row" spacing={3} sx={{ alignItems: "center" }}>
        <img
          src={image}
          alt={label}
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "50%",
          }}
        />
        <Typography
          variant="body2"
          sx={{
            fontWeight: 550,
          }}
        >
          {label}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default HotCategoryGridItem;
