import React from "react";
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const ContactForm = () => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: 500,
        }}
      >
        <TextField
          sx={{ mt: 3, mx: 2 }}
          id="filled-basic"
          label="Name *"
          variant="filled"
        />
        <TextField
          sx={{ mx: 2, mt: 2 }}
          id="filled-basic"
          label="Phone *"
          variant="filled"
        />
        <TextField
          sx={{ mx: 2, mt: 2 }}
          id="filled-basic"
          label="Email *"
          variant="filled"
        />
        <TextField
          sx={{ mx: 2, mt: 2, mb: 3 }}
          id="filled-basic"
          label="Photo URL *"
          variant="filled"
        />
        <Button
          variant="text"
          sx={{
            display: "flex",
            flexDirection: "flex-start",
          }}
        >
          ADD NEW
        </Button>
      </Card>
    </>
  );
};

export default ContactForm;
