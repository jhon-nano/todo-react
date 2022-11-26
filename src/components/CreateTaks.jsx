import React from "react";
import { Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Avatar, TextField, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

export default function CreateTaks({ loading, setLoading, setTasks }) {
  const [name, setName] = React.useState("Cat in the Hat");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  function handleClick() {
    setLoading(true);
    setTimeout(() => {
      setTasks((task) => [...task, { title: name, completed: false }]);
      setLoading(false);
    }, 1000);
  }

  return (
    <React.Fragment>
      <Avatar sx={{ width: 80, height: 80, mx: "auto" }} />
      <Typography variant="h6" noWrap component="div" align="center">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString("New Task").pauseFor(2500).start();
          }}
        />
      </Typography>
      <TextField
        label="Task Title"
        multiline
        minRows={4}
        margin="normal"
        value={name}
        onChange={handleChange}
        fullWidth
      />
      <LoadingButton
        color="primary"
        onClick={handleClick}
        loading={loading}
        loadingPosition="start"
        startIcon={<Save />}
        variant="contained"
      >
        Save Task
      </LoadingButton>
    </React.Fragment>
  );
}
