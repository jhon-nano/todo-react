import { Check, History, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Card, CardHeader, IconButton, List, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function CardTodo({ task, loading, onCompleted }) {
  return (
    <Card
      variant="outlined"
      sx={{
        background: task.completed ? "#82E0AA" : "#EC7063",
        opacity: task.completed ? 0.5 : 1,
      }}
    >
      <CardHeader
        avatar={<List fontSize="large" />}
        title="TASK"
        subheader={task.completed ? "COMPLETED" : "PENDING"}
        action={
          <IconButton disabled>
            {task.completed ? (
              <Check fontSize="large" color="success" />
            ) : (
              <History fontSize="large" color="error" />
            )}
          </IconButton>
        }
      />

      <Box p={1}>
        <TextField
          label="Task Title"
          multiline
          minRows={4}
          margin="normal"
          focused
          value={task.title}
          fullWidth
          variant="filled"
        />
        <LoadingButton
          color="primary"
          onClick={() => onCompleted()}
          loading={loading}
          loadingPosition="start"
          disabled={task.completed}
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
