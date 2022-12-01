import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TodoContext } from "../Context";

function TodoFormDialog() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (data) => {
    // event.preventDefault();
    console.log(data);
    addTodo(data.text);
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>Nuevo Todo</DialogTitle>
      <DialogContent dividers>
        <Paper elevation={3} sx={{ padding: 1 }}>
          <Controller
            name="text"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                multiline
                rows={3}
                label="Text Todo"
                focused
                error={errors.text}
                helperText={
                  errors.text
                    ? errors.text.message
                    : "Sugerencia: Pendiente Llamar al Primo.."
                }
              />
            )}
            rules={{ required: "Campo Obligatorio" }}
          />
        </Paper>
      </DialogContent>
      <DialogActions>
        <Button color="error" variant="outlined" onClick={onCancel}>
          CANCELAR
        </Button>
        <Button type="submit" variant="contained" color="success">
          AGREGAR
        </Button>
      </DialogActions>
    </form>
  );
}

export { TodoFormDialog };
