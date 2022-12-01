import React from "react";
import { Typography } from "@mui/material";
import { TodoContext } from "../Context";


function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <Typography variant="button">
      Has completado {completedTodos} de {totalTodos} TODOs
    </Typography>
  );
}

export { TodoCounter };
