// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  const { name, phone, email, photo } = data;
  return (
    <>
      <List sx={{ width: "100%", maxWidth: 520, bgcolor: "silver" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={name} src={photo} />
          </ListItemAvatar>
          <ListItemText
            primary={name}
            secondary={
              <>
                {phone}
                <br />
                {email}
              </>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </>
  );
};

export default Contact;
