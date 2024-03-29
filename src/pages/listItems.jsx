import { forwardRef } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { UploadFileOutlined } from "@mui/icons-material";

export const mainListItems = (
  <>
    <Link component={RouterLink} to={"/"} underline="none" color="inherit">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Inicio" />
      </ListItemButton>
    </Link>
    <Link
      component={RouterLink}
      to={"/customers"}
      underline="none"
      color="inherit"
    >
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItemButton>
    </Link>

    <Link
      component={RouterLink}
      to={"/customers/files/upload"}
      underline="none"
      color="inherit"
    >
      <ListItemButton>
        <ListItemIcon>
          <UploadFileOutlined />
        </ListItemIcon>
        <ListItemText primary="Subir archivos" />
      </ListItemButton>
    </Link>
  </>
);
