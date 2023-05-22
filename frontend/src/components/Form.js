import React from "react";
import { toast } from "react-toastify";
import {
  Button,
  Typography,
  Stack,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/FacebookOutlined";

import FormField from "./FormField";

import { logoUrl } from "../utils/imageUrls";

const renderFormField = (
  label,
  type,
  setValue,
  onChangeAction,
  placeholder = "",
  required = true,
  validate = false
) => {
  return (
    <FormField
      label={label}
      type={type}
      validate={validate}
      setTargetValue={setValue}
      placeholder={placeholder ? placeholder : `Enter ${label}`}
      required={required}
      onChangeAction={onChangeAction}
    />
  );
};

const renderSubmitButton = (label, loading, icon) => {
  return (
    <LoadingButton
      variant="contained"
      color="inherit"
      type="submit"
      fullWidth
      loading={loading}
      loadingPosition="start"
      sx={{
        borderRadius: 1,
        mt: 2,
        fontWeight: 600,
        textTransform: "initial",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.02)",
        },
      }}
      startIcon={icon ? icon : null}
    >
      {label}
    </LoadingButton>
  );
};

const renderSocialButtons = () => (
  <Stack
    direction="row"
    display="flex"
    sx={{
      width: "100%",
      my: 2,
    }}
    justifyContent="space-between"
    alignItems="center"
  >
    <Button
      variant="outlined"
      startIcon={<GoogleIcon />}
      // onClick={handleGoogleLogin}
      // disabled
      fullWidth
      sx={{
        maxWidth: "49%",
        borderRadius: 1,
        fontWeight: 600,
        textTransform: "initial",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.02)",
        },
      }}
    >
      Google
    </Button>

    <Button
      variant="contained"
      startIcon={<FacebookIcon />}
      // onClick={handleGoogleLogin}
      // disabled
      fullWidth
      sx={{
        maxWidth: "49%",
        borderRadius: 1,
        fontWeight: 600,
        textTransform: "initial",
        "&:hover": {
          boxShadow: 3,
          transform: "scale(1.02)",
        },
      }}
    >
      Facebook
    </Button>
  </Stack>
);

const submitHandler = (e, data, schema, action) => {
  e.preventDefault();

  const { error } = schema.validate(
    { ...data },
    {
      abortEarly: false,
      errors: { label: "key", wrap: { label: false } },
    }
  );
  if (error) return toast.error(error.details[0].message) && null;

  action();
};

const FormContainer = ({ title, subtitle, onSubmit, children }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgcolor: "white",
        borderRadius: "10px",
        alignItems: "center",
        boxShadow: 3,
        "&:hover": {
          boxShadow: 4,
          transform: "scale(1.01)",
        },
        width: isMobile ? "100%" : isTablet ? "80%" : "40%",
        maxWidth: "488px",
        margin: "0 auto",
        marginTop: isMobile ? "8px" : isTablet ? "16px" : "40px",
        px: isTablet ? 5 : isMobile ? 2 : 8,
        py: 3,
      }}
    >
      <img
        src={logoUrl}
        alt="logo"
        width="100"
        height="100"
        style={{
          borderRadius: "50%",
          borderColor: "green",
          border: "solid 1px",
        }}
      />
      <Typography variant="body1" sx={{ mt: 2, fontSize: 18, fontWeight: 580 }}>
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            mt: 0.5,
            fontSize: 14,
            mb: 1,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {subtitle}
        </Typography>
      )}
      <form
        onSubmit={onSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {children}
      </form>
    </Box>
  );
};

export {
  submitHandler,
  renderFormField,
  renderSubmitButton,
  renderSocialButtons,
  FormContainer,
};
