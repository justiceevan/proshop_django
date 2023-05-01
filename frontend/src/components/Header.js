import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Badge,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";
import UsersIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import OrdersIcon from "@mui/icons-material/LocalShipping";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import { grey } from "@mui/material/colors";

import SearchBox from "./SearchBox";

import { logout } from "../store/user";
import CategoryDrawer from "./CategoryDrawer";

import { calculateToolbarPadding } from "../utils/toolBarPadding";

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
});

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let currentlyHovering = false;
  const styles = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const width = window.innerWidth;

  const toolBarPadding = calculateToolbarPadding(width);

  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  let totalItemsInCart = 0;
  cartItems.map((item) => (totalItemsInCart += Number(item.quantity)));

  const handleLogout = () => {
    dispatch(logout());
  };

  const [adminAnchorEl, setAdminAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  function handleAdminClick(event) {
    if (adminAnchorEl !== event.currentTarget) {
      setAdminAnchorEl(event.currentTarget);
    }
  }

  const handleProfileClick = (event) => {
    if (profileAnchorEl !== event.currentTarget) {
      setProfileAnchorEl(event.currentTarget);
    }
  };

  const handleAccountClick = (event) => {
    if (accountAnchorEl !== event.currentTarget) {
      setAccountAnchorEl(event.currentTarget);
    }
  };

  function handleAdminHover() {
    currentlyHovering = true;
  }

  const handleProfileHover = () => {
    currentlyHovering = true;
  };

  const handleAccountHover = () => {
    currentlyHovering = true;
  };

  function handleCloseAdmin() {
    setAdminAnchorEl(null);
  }

  const handleCloseProfile = () => {
    setProfileAnchorEl(null);
  };

  const handleCloseAccount = () => {
    setAccountAnchorEl(null);
  };

  function handleCloseAdminHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleCloseAdmin();
      }
    }, 50);
  }

  const handleCloseProfileHover = () => {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleCloseProfile();
      }
    }, 50);
  };

  const handleCloseAccountHover = () => {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleCloseAccount();
      }
    }, 50);
  };

  return (
    <AppBar
      position={isMobile ? "fixed" : "static"}
      sx={{
        bgcolor: grey[800],
        px: isMobile ? 0 : toolBarPadding,
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          display="flex"
          justifyContent="space-between"
          color="inherit"
          width={isMobile ? "100%" : "auto"}
        >
          <Stack direction="row">
            {!isDesktop && <CategoryDrawer />}

            <IconButton onClick={() => navigate("/")} edge="start">
              <img
                src="https://proshop.nyc3.cdn.digitaloceanspaces.com/proshop/images/logo.jpg"
                alt="logo"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              />
            </IconButton>

            {!isMobile && (
              <Button color="inherit" component={Link} to="/" className="me-3">
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, fontWeight: "550" }}
                >
                  ProShop
                </Typography>
              </Button>
            )}
          </Stack>

          <SearchBox />
        </Stack>

        {!isMobile && (
          <>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                flexGrow: 1,
                justifyContent: "flex-end",
              }}
            >
              <Button
                color="inherit"
                component={Link}
                to="/cart"
                sx={{
                  "&:hover": { color: "#fff" },
                }}
                size="small"
              >
                <Badge badgeContent={totalItemsInCart} color="error">
                  <Stack direction="row" spacing={0.5}>
                    <ShoppingCartIcon fontSize="small" />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "550",
                      }}
                    >
                      CART
                    </Typography>
                  </Stack>
                </Badge>
              </Button>

              {userInfo && userInfo.isAdmin && (
                <Button
                  color="inherit"
                  aria-owns={adminAnchorEl ? "admin-menu" : undefined}
                  aria-haspopup="true"
                  onClick={handleAdminClick}
                  onMouseEnter={handleAdminClick}
                  onMouseLeave={handleCloseAdminHover}
                >
                  <Stack direction="row" spacing={0.5}>
                    <AdminIcon fontSize="small" />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "550",
                      }}
                    >
                      ADMIN
                    </Typography>
                  </Stack>
                </Button>
              )}

              {userInfo ? (
                <IconButton
                  color="inherit"
                  aria-owns={profileAnchorEl ? "profile-menu" : undefined}
                  aria-haspopup="true"
                  onClick={handleProfileClick}
                  onMouseEnter={handleProfileClick}
                  onMouseLeave={handleCloseProfileHover}
                >
                  <Avatar sizes="small">
                    {userInfo.name.split(" ").map((name) => name[0])}
                  </Avatar>
                </IconButton>
              ) : (
                <Button
                  color="inherit"
                  aria-owns={accountAnchorEl ? "account-menu" : undefined}
                  aria-haspopup="true"
                  onClick={handleAccountClick}
                  onMouseEnter={handleAccountClick}
                  onMouseLeave={handleCloseAccountHover}
                >
                  <Stack direction="row" spacing={0.5}>
                    <PersonIcon fontSize="small" />
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "550",
                      }}
                    >
                      ACCOUNT
                    </Typography>
                  </Stack>
                </Button>
              )}
            </Stack>

            <Menu
              id="admin-menu"
              anchorEl={adminAnchorEl}
              open={Boolean(adminAnchorEl)}
              onClose={handleCloseAdmin}
              MenuListProps={{
                onMouseEnter: handleAdminHover,
                onMouseLeave: handleCloseAdminHover,
                style: { pointerEvents: "auto" },
              }}
              getContentAnchorEl={null}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              sx={{
                "& .MuiMenu-paper": {
                  backgroundColor: grey[500],
                  color: "white",
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: grey[600],
                  },
                },
              }}
              PopoverClasses={{
                root: styles.popOverRoot,
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/admin/users");
                  handleCloseAdmin();
                }}
              >
                <Stack direction="row" spacing={0.5}>
                  <UsersIcon fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "550",
                    }}
                  >
                    Users
                  </Typography>
                </Stack>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  navigate("/admin/products");
                  handleCloseAdmin();
                }}
              >
                <Stack direction="row" spacing={0.5}>
                  <ShoppingBasketIcon fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "550",
                    }}
                  >
                    Products
                  </Typography>
                </Stack>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  navigate("/admin/orders");
                  handleCloseAdmin();
                }}
              >
                <Stack direction="row" spacing={0.5}>
                  <OrdersIcon fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "550",
                    }}
                  >
                    Orders
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>

            <Menu
              id="account-menu"
              anchorEl={accountAnchorEl}
              open={Boolean(accountAnchorEl)}
              onClose={handleCloseAccount}
              MenuListProps={{
                onMouseEnter: handleAccountHover,
                onMouseLeave: handleCloseAccountHover,
                style: { pointerEvents: "auto" },
              }}
              getContentAnchorEl={null}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              sx={{
                "& .MuiMenu-paper": {
                  backgroundColor: grey[500],
                  color: "white",
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: grey[600],
                  },
                },
              }}
              PopoverClasses={{
                root: styles.popOverRoot,
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/login");
                  handleCloseAccount();
                }}
              >
                <Stack direction="row" spacing={0.5}>
                  <LoginIcon fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "550",
                    }}
                  >
                    Login
                  </Typography>
                </Stack>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  navigate("/register");
                  handleCloseAccount();
                }}
              >
                <Stack direction="row" spacing={0.5}>
                  <PersonAddIcon fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "550",
                    }}
                  >
                    Sign Up
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>

            <Menu
              id="profile-menu"
              anchorEl={profileAnchorEl}
              open={Boolean(profileAnchorEl)}
              onClose={handleCloseProfile}
              MenuListProps={{
                onMouseEnter: handleProfileHover,
                onMouseLeave: handleCloseProfileHover,
                style: { pointerEvents: "auto" },
              }}
              getContentAnchorEl={null}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
              sx={{
                "& .MuiMenu-paper": {
                  backgroundColor: grey[500],
                  color: "white",
                },
                "& .MuiMenuItem-root": {
                  "&:hover": {
                    backgroundColor: grey[600],
                  },
                },
              }}
              PopoverClasses={{
                root: styles.popOverRoot,
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("/profile");
                  handleCloseProfile();
                }}
              >
                <Stack direction="row" spacing={0.5}>
                  <PersonIcon fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "550",
                    }}
                  >
                    Profile
                  </Typography>
                </Stack>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  handleLogout();
                  handleCloseProfile();
                }}
              >
                <Stack direction="row" spacing={0.5}>
                  <LogoutIcon fontSize="small" />
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: "550",
                    }}
                  >
                    Logout
                  </Typography>
                </Stack>
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
