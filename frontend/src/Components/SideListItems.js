import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { Link, NavLink } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StoreIcon from "@mui/icons-material/Store";
import { doLogOut } from "../Service/AuthService";
export const SideListItems = () => {
  return (
    <>
      <React.Fragment>
        <Link to={"/home"}>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              style={{ textDecoration: "none",color:'black'  }}
            />
          </ListItemButton>
        </Link>

        <Link to={"/events"}>
        <ListItemButton>
          <ListItemIcon>
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText primary="Event"  style={{ textDecoration: "none",color:'black' }} />
        </ListItemButton>
        </Link>

        <Link to={'/booking'}>
        <ListItemButton>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Booking"  style={{ textDecoration: "none",color:'black' }} />
        </ListItemButton>
        </Link>

        <Link to={"/anlytcs"}>
        <ListItemButton>
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText primary="Reports"  style={{ textDecoration: "none",color:'black' }} />
        </ListItemButton>
        </Link>

        <Link to={"/anlytcs"}>
        <ListItemButton>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Integrations"  style={{ textDecoration: "none",color:'black' }} />
        </ListItemButton>
        </Link>
      </React.Fragment>

      <React.Fragment>
     
        <ListSubheader component="div" inset>
          User Related Options
        </ListSubheader>
        <Link to={"/anlytcs"}>
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile"  style={{ textDecoration: "none",color:'black' }}/>
        </ListItemButton>
        </Link>
        <Link to={"/anlytcs"}>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting"  style={{ textDecoration: "none",color:'black' }} />
        </ListItemButton>
        </Link>
        <Link to={"/signin"} onClick={doLogOut}>
        <ListItemButton>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout"  style={{ textDecoration: "none",color:'black' }} />
        </ListItemButton>
        </Link>
      </React.Fragment>
    </>
  );
};
