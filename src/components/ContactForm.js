import React, { useState } from "react";
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const ContactForm = ({ addContact }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada
  const initialData = {
    name: "",
    phone: "",
    email: "",
    photo: "",
  };

  const [newContact, setNewContact] = useState(initialData);

  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setNewContact({
      ...newContact,
      [name]: value,
    });
  };

  const formSubmitHandler = () => {
    console.log(newContact);
    addContact(newContact);
    setNewContact(initialData);
  };

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
          name="name"
          onChange={userInputHandler}
        />
        <TextField
          sx={{ mx: 2, mt: 2 }}
          id="filled-basic"
          label="Phone *"
          variant="filled"
          name="phone"
          onChange={userInputHandler}
        />
        <TextField
          sx={{ mx: 2, mt: 2 }}
          id="filled-basic"
          label="Email *"
          variant="filled"
          name="email"
          onChange={userInputHandler}
        />
        <TextField
          sx={{ mx: 2, mt: 2, mb: 3 }}
          id="filled-basic"
          label="Photo URL *"
          variant="filled"
          name="photo"
          onChange={userInputHandler}
        />
        <Button
          variant="text"
          sx={{
            display: "flex",
            flexDirection: "flex-start",
          }}
          onClick={formSubmitHandler}
        >
          ADD NEW
        </Button>
      </Card>
    </>
  );
};

export default ContactForm;
