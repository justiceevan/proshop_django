import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Joi from "joi";
import {
  Divider,
  IconButton,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoginIcon from "@mui/icons-material/Login";
import { toast } from "react-toastify";

import {
  FormContainer,
  submitHandler,
  renderFormField,
  renderSubmitButton,
  renderSocialButtons,
} from "../components/Form";

import { login, clearError } from "../store/user";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [searchParams] = useSearchParams();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const params = [...searchParams];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email"),
    password: Joi.string().required().label("Password"),
  });

  const userSlice = useSelector((state) => state.user);
  const { userInfo, loading, error } = userSlice;

  const redirect = params.length > 0 ? params[0][1] : "";

  useEffect(() => {
    if (userInfo) navigate(`/${redirect}`);
    dispatch(clearError());
  }, [userInfo, dispatch, navigate, redirect]);

  const onChangeAction = () => {
    error && dispatch(clearError());
  };

  const submitAction = () => {
    dispatch(clearError());
    dispatch(login(email, password));
  };

  const handleSubmit = (e) => {
    const data = { email, password };
    submitHandler(e, data, schema, submitAction);
  };

  return (
    <>
      {error && toast.error(error) && null}

      {isMobile && (
        <IconButton onClick={() => navigate(-1)} size="large" aria-label="back">
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      )}

      <FormContainer
        title="Welcome Back!"
        subtitle="Type your email and password to login to your Proshop account."
        onSubmit={handleSubmit}
      >
        {renderFormField("Email", "email", setEmail, onChangeAction)}
        {renderFormField("Password", "password", setPassword, onChangeAction)}
        <Link to="/reset-password">Forgot password?</Link>
        {renderSubmitButton("Log in", loading, <LoginIcon />)}

        <Divider sx={{ mt: 2 }}>Or log in with</Divider>

        {renderSocialButtons()}

        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="body2">Don't have an account?</Typography>
          <Link to="/register">Sign up</Link>
        </Stack>
      </FormContainer>
    </>
  );
};

export default LoginPage;
