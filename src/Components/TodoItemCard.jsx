import { Close, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Card, CardHeader, IconButton, List, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function TodoItemCard(props) {
  return (
    <Card
      variant="outlined"
      sx={{
        background: props.todo.completed ? "#82E0AA" : "#EC7063",
        opacity: props.todo.completed ? 0.5 : 1,
        margin: 2,
      }}
    >
      <CardHeader
        avatar={<List fontSize="large" />}
        title={"TODO # " + (props.index + 1)}
        //  subheader={task.completed ? "COMPLETED" : "PENDING"}
        action={
          <IconButton disabled={props.todo.completed} onClick={props.onDelete}>
            <Close fontSize="large" color="error" />
          </IconButton>
        }
      />

      <Box p={1}>
        <TextField
          label="Task Title"
          multiline
          minRows={4}
          margin="normal"
          value={props.todo.text}
          focused
          fullWidth
          variant="filled"
        />
        <LoadingButton
          color="primary"
          onClick={props.onComplete}
          disabled={props.todo.completed}
          loadingPosition="start"
          startIcon={<Save />}
          fullWidth
          variant="contained"
        >
          Completed Todo
        </LoadingButton>
      </Box>
    </Card>
  );
}

export { TodoItemCard };

//
