import Box from "@mui/material/Box";

import * as React from "react";

import Code from "@mui/icons-material/Code";

import Typography from "@mui/material/Typography";

import Typewriter from "typewriter-effect";



export default function AppBarTodo({ children }) {



  return (
    <Box
      sx={{
        mt: 3,
        mr: 2,
        px: 2,
        flexGrow: 1,
        minWidth: 0,
        display: "flex",
        gap: 2,
        bgcolor: "background.paper",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
      }}
    >
      <Code color="primary" fontSize="large" sx={{ paddingRight: 1 }} />
      <Typography
        variant="h4"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
      >
        <Typewriter
          options={{
            autoStart: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString("MIS TODOS").pauseFor(2500).start();
          }}
        />
      </Typography>
      {children}
    </Box>
  );
}
