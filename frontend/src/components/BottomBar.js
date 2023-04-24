import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
  Avatar,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import AdminIcon from "@mui/icons-material/AdminPanelSettings";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import UsersIcon from "@mui/icons-material/PeopleAlt";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import OrdersIcon from "@mui/icons-material/LocalShipping";
import { grey } from "@mui/material/colors";

import { logout } from "../store/user";

function BottomBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const hash = window.location.hash;
  let path = hash.split("#")[1];
  if (!path) {
    path = "/";
  }

  const [value, setValue] = useState(1);
  const [adminAnchorEl, setAdminAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  useEffect(() => {
    (path === "/" || path.startsWith("/?q=")) && setValue(0);
    path.startsWith("/cart") && setValue(1);
    path.startsWith("/admin") && setValue(2);
    (path.startsWith("/profile") ||
      path.startsWith("/login") ||
      path.startsWith("/register")) &&
      setValue(3);
  }, [path, value]);

  const handleLogout = () => {
    dispatch(logout());
  };

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

  function handleCloseAdmin() {
    setAdminAnchorEl(null);
  }

  const handleCloseProfile = () => {
    setProfileAnchorEl(null);
  };

  const handleCloseAccount = () => {
    setAccountAnchorEl(null);
  };

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        bgcolor: grey[800],
        "& .MuiBottomNavigationAction-root.Mui-selected": {
          color: "white",
        },
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label="Home"
        icon={<HomeIcon fontSize="small" />}
        onClick={() => navigate("/")}
        sx={{ color: grey[500] }}
      />
      <BottomNavigationAction
        label="Cart"
        icon={
          <Badge badgeContent={cartItems.length} color="error">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        }
        onClick={() => navigate("/cart")}
        sx={{ color: grey[500] }}
      />

      {userInfo && userInfo.isAdmin && (
        <BottomNavigationAction
          label="Admin"
          icon={<AdminIcon fontSize="small" />}
          onClick={handleAdminClick}
          sx={{ color: grey[500] }}
        />
      )}

      {userInfo ? (
        <BottomNavigationAction
          onClick={handleProfileClick}
          icon={
            <Avatar sizes="small">
              {userInfo.name.split(" ").map((name) => name[0])}
            </Avatar>
          }
          sx={{ color: grey[500] }}
        />
      ) : (
        <BottomNavigationAction
          label="Account"
          icon={<PersonIcon fontSize="small" />}
          onClick={handleAccountClick}
          sx={{ color: grey[500] }}
        />
      )}

      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleCloseProfile}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        getContentAnchorEl={null}
        sx={{
          "& .MuiMenu-paper": { bgcolor: grey[500], color: "white" },
          "& .MuiMenu-list": { padding: "0", margin: "0" },
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/profile");
            handleCloseProfile();
          }}
          dense
        >
          <Stack direction="row" spacing={0.5}>
            <PersonIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "550",
              }}
            >
              Profile
            </Typography>
          </Stack>
        </MenuItem>
        <Divider sx={{ margin: "0" }} />
        <MenuItem
          onClick={() => {
            handleLogout();
            handleCloseProfile();
          }}
          dense
        >
          <Stack direction="row" spacing={0.5}>
            <LogoutIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "550",
              }}
            >
              Logout
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={adminAnchorEl}
        open={Boolean(adminAnchorEl)}
        onClose={handleCloseAdmin}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        getContentAnchorEl={null}
        sx={{
          "& .MuiMenu-paper": { bgcolor: grey[500], color: "white" },
          "& .MuiMenu-list": { padding: "0", margin: "0" },
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/admin/users");
            handleCloseAdmin();
          }}
          dense
        >
          <Stack direction="row" spacing={0.5}>
            <UsersIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "550",
              }}
            >
              Users
            </Typography>
          </Stack>
        </MenuItem>
        <Divider sx={{ margin: "0" }} />
        <MenuItem
          onClick={() => {
            navigate("/admin/products");
            handleCloseAdmin();
          }}
          dense
        >
          <Stack direction="row" spacing={0.5}>
            <ShoppingBasketIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "550",
              }}
            >
              Products
            </Typography>
          </Stack>
        </MenuItem>
        <Divider sx={{ margin: "0" }} />
        <MenuItem
          onClick={() => {
            navigate("/admin/orders");
            handleCloseAdmin();
          }}
          dense
        >
          <Stack direction="row" spacing={0.5}>
            <OrdersIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "550",
              }}
            >
              Orders
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>

      <Menu
        anchorEl={accountAnchorEl}
        open={Boolean(accountAnchorEl)}
        onClose={handleCloseAccount}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        getContentAnchorEl={null}
        sx={{
          "& .MuiMenu-paper": { bgcolor: grey[500], color: "white" },
          "& .MuiMenu-list": { padding: "0", margin: "0" },
        }}
      >
        <MenuItem
          onClick={() => {
            navigate("/login");
            handleCloseAccount();
          }}
          dense
        >
          <Stack direction="row" spacing={0.5}>
            <LoginIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "550",
              }}
            >
              Login
            </Typography>
          </Stack>
        </MenuItem>
        <Divider sx={{ margin: "0" }} />
        <MenuItem
          onClick={() => {
            navigate("/register");
            handleCloseAccount();
          }}
          dense
        >
          <Stack direction="row" spacing={0.5}>
            <PersonAddIcon fontSize="small" />
            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontWeight: "550",
              }}
            >
              Sign up
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </BottomNavigation>
  );
}

export default BottomBar;
