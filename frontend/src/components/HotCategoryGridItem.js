import { Grid, Stack, Typography } from "@mui/material";

const HotCategoryGridItem = ({ image, label, onClick }) => {
  return (
    <Grid item component={Stack} onClick={onClick}>
      <Stack
        direction="column"
        spacing={1}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
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
          variant="subtitle1"
          component="div"
          sx={{
            fontWeight: 550,
            textAlign: "center",
            lineHeight: 1.1,
            fontSize: 10,
          }}
        >
          {label}
        </Typography>
      </Stack>
    </Grid>
  );
};

export default HotCategoryGridItem;
