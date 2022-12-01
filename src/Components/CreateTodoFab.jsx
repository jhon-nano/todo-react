import { PostAdd } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";

const fabStyle = {
  position: "absolute",
  bottom: 8,
  right: 8,
};

function CreateTodoFab(props) {
  const onClickButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return <Fab sx={fabStyle} color='info' onClick={onClickButton}><PostAdd fontSize="large"/></Fab>;
}

export { CreateTodoFab };
