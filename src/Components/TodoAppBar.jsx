import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import * as React from "react";

import Code from "@mui/icons-material/Code";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";

import Typewriter from "typewriter-effect";
import { TodoContext } from "../Context";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.main, 0.25),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.dark, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function AppBarTodo() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
    const onSearchValueChange = (event) => {
      console.log(event.target.value);
      setSearchValue(event.target.value);
    };


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

      <Search>
        <SearchIconWrapper>
          <SearchIcon color="secondary" />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search Task..."
          inputProps={{ "aria-label": "search" }}
          value={searchValue}
          onChange={onSearchValueChange}
        />
      </Search>
    </Box>
  );
}
