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

import NavMenuItem from "./NavMenuItem";

import { logout } from "../store/user";

function BottomBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  let totalItemsInCart = 0;
  cartItems.map((item) => (totalItemsInCart += Number(item.quantity)));

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
      />
      <BottomNavigationAction
        label="Cart"
        icon={
          <Badge badgeContent={totalItemsInCart} color="error">
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        }
        onClick={() => navigate("/cart")}
      />

      {userInfo && userInfo.isAdmin && (
        <BottomNavigationAction
          label="Admin"
          icon={<AdminIcon fontSize="small" />}
          onClick={handleAdminClick}
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
        />
      ) : (
        <BottomNavigationAction
          label="Account"
          icon={<PersonIcon fontSize="small" />}
          onClick={handleAccountClick}
        />
      )}

      <Menu
        anchorEl={profileAnchorEl}
        open={Boolean(profileAnchorEl)}
        onClose={handleCloseProfile}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        getContentAnchorEl={null}
      >
        <NavMenuItem
          label="Profile"
          icon={<PersonIcon fontSize="small" />}
          route="/profile"
          handleClose={handleCloseProfile}
          props={{ dense: true }}
        />
        <Divider sx={{ margin: "0" }} />
        <NavMenuItem
          label="Logout"
          icon={<LogoutIcon fontSize="small" />}
          onClick={handleLogout}
          handleClose={handleCloseProfile}
          props={{ dense: true }}
        />
      </Menu>

      <Menu
        anchorEl={adminAnchorEl}
        open={Boolean(adminAnchorEl)}
        onClose={handleCloseAdmin}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        getContentAnchorEl={null}
      >
        <NavMenuItem
          label="Users"
          icon={<UsersIcon fontSize="small" />}
          route="/admin/users"
          handleClose={handleCloseAdmin}
          props={{ dense: true }}
        />
        <Divider sx={{ margin: "0" }} />
        <NavMenuItem
          label="Products"
          icon={<ShoppingBasketIcon fontSize="small" />}
          route="/admin/products"
          handleClose={handleCloseAdmin}
          props={{ dense: true }}
        />
        <Divider sx={{ margin: "0" }} />
        <NavMenuItem
          label="Orders"
          icon={<OrdersIcon fontSize="small" />}
          route="/admin/orders"
          handleClose={handleCloseAdmin}
          props={{ dense: true }}
        />
      </Menu>

      <Menu
        anchorEl={accountAnchorEl}
        open={Boolean(accountAnchorEl)}
        onClose={handleCloseAccount}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "bottom", horizontal: "left" }}
        getContentAnchorEl={null}
      >
        <NavMenuItem
          label="Login"
          icon={<LoginIcon fontSize="small" />}
          route="/login"
          handleClose={handleCloseAccount}
          props={{ dense: true }}
        />
        <Divider sx={{ margin: "0" }} />
        <NavMenuItem
          label="Sign up"
          icon={<PersonAddIcon fontSize="small" />}
          route="/register"
          handleClose={handleCloseAccount}
          props={{ dense: true }}
        />
      </Menu>
    </BottomNavigation>
  );
}

export default BottomBar;
