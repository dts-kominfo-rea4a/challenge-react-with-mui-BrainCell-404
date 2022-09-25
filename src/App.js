import React, { useState } from "react";

import "./App.css";

import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import { Grid } from "@mui/material";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  const [allContacts, setAllContacts] = useState(contactsJSON);
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const addNewContact = (newContact) => {
    setAllContacts(() => [...allContacts, newContact]);
  };

  return (
    <div className="App">
      <Header />
      <Grid sx={{ mt: 5 }} container spacing={2} justifyContent="center">
        <Grid item xs={6} md={5}>
          <ContactForm addContact={addNewContact} />
        </Grid>
        <Grid item xs={6} md={4}>
          {allContacts.map((contact) => {
            return <Contact data={contact} key={contact.phone} />;
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
