import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { drawerClasses } from "@mui/material/Drawer";
import { inputBaseClasses } from "@mui/material/InputBase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

import { Modal } from "../Modal";
import { TodoContext } from "../Context";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoFormDialog } from "../Components/TodoFormDialog";
import { TodoItemCard } from "../Components/TodoItemCard";

import {
  Content,
  EdgeSidebar,
  Footer,
  Fullscreen,
  Header,
  InsetContainer,
  Root,
  SidebarContent,
} from "@mui-treasury/layout";
import { Code, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Chip, Grid, Grow, Paper } from "@mui/material";

import { Box } from "@mui/system";
import TodoAppBar from "../Components/TodoAppBar";
import TodoSkeleton from "../Components/TodoSkeletonCard";
import { CreateTodoFab } from "../Components/CreateTodoFab";

const coolGray = {
  50: "#f9fafb",
  100: "#f3f4f6",
  200: "#e5e7eb",
  300: "#d1d5db",
  400: "#9ca3af",
  500: "#6b7280",
  600: "#4b5563",
  700: "#374151",
  800: "#1f2937",
  900: "#111827",
};

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          common: {
            black: "#000",
            white: "#fff",
          },
          primary: {
            light: "#4fb3bf",
            main: "#00838f",
            dark: "#005662",
            contrastText: "#fff",
          },
          secondary: {
            light: "#a44fbb",
            main: "#8e24aa",
            dark: "#631976",
          },
          error: {
            light: "#f55a4e",
            main: "#FF0000",
            dark: "#f32c1e",
            contrastText: "#fff",
          },
          warning: {
            light: "#ffa21a",
            main: "#FF9800",
            dark: "#e68900",
            contrastText: "#fff",
            backgroundColor: "green",
          },
          info: {
            light: "#14b4fc",
            main: "#2471A3 ",
            dark: "#0398db",
            contrastText: "#fff",
          },
          success: {
            light: "#5cb860",
            main: "#4CAF50",
            dark: "#449d48",
            contrastText: "#fff",
          },

          text: {
            primary: coolGray[900],
            secondary: coolGray[600],
            disabled: coolGray[300],
          },
          background: {
            default: coolGray[100],
            paper: "#fff",
          },
          grey: coolGray,
        },
        components: {
          AppEdgeSidebar: {
            styleOverrides: {
              root: {
                [`& .${drawerClasses.paper}`]: {
                  backgroundColor: "rgba(0,0,0,0)",
                  border: "none",
                },
              },
            },
          },
          AppContent: {
            styleOverrides: {
              root: {
                marginBottom: 16,
              },
            },
          },
          AppInsetSidebar: {
            styleOverrides: {
              root: {
                padding: 16,
                paddingLeft: 0,
              },
            },
          },
          AppFooter: {
            styleOverrides: {
              root: {
                marginBottom: 20,
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 40,
              },
            },
          },
          MuiFilledInput: {
            styleOverrides: {
              root: {
                [`&.${inputBaseClasses.hiddenLabel}`]: {
                  borderRadius: 40,
                },
                backgroundColor: coolGray[100],
                "&:hover": {
                  backgroundColor: coolGray[200],
                },
                "&.Mui-focused": {
                  boxShadow: `0 0 0 1px ${coolGray[500]}`,
                  backgroundColor: "#fff",
                },
              },
            },
          },
          MuiPaper: {
            defaultProps: {
              elevation: 10,
            },
          },
          MuiSkeleton: {
            styleOverrides: {
              root: {
                backgroundColor: coolGray[200],
              },
            },
          },
        },
      })}
    >
      <Fullscreen>
        <Root
          scheme={{
            header: {
              config: {
                xs: {
                  position: "sticky",
                  height: 80,
                },
              },
            },
            leftEdgeSidebar: {
              config: {
                xs: {
                  variant: "permanent",
                  width: 0,
                },
                md: {
                  variant: "permanent",
                  width: 80,
                },
              },
            },
            rightInsetSidebar: {
              config: {
                xs: {
                  variant: "temporary",
                  width: 0,
                },
                md: {
                  variant: "permanent",
                  width: 280,
                },
              },
            },
          }}
        >
          <CssBaseline />
          <Header>
            <TodoAppBar />
          </Header>
          <EdgeSidebar anchor="left">
            <SidebarContent
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Button
                variant="outlined"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/JhonSanchez1601")
                }
              >
                <LinkedIn color="secondary" />
              </Button>

              <Button
                variant="outlined"
                onClick={() => window.open("https://github.com/jhon-nano")}
              >
                <GitHub color="secondary" />
              </Button>
              <Button
                variant="outlined"
                onClick={() =>
                  window.open("https://www.instagram.com/jhonsanchez1601/")
                }
              >
                <Instagram color="secondary" />
              </Button>
            </SidebarContent>
          </EdgeSidebar>

          <Content>
            <InsetContainer
              maxWidth={true}
              disableGutters
              sx={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                bgcolor: "background.paper",
                mr: 2,
              }}
            >
              <Grid container>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {!loading && !searchedTodos.length && <TodoSkeleton />}

                {searchedTodos.map((todo, index) => (
                  <Grow
                    key={index}
                    in={true}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(true ? { timeout: 1000 } : {})}
                  >
                    <Grid item xs={12} sm={6} md={4}>
                      <TodoItemCard
                        index={index}
                        todo={todo}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                      />
                    </Grid>
                  </Grow>
                ))}
              </Grid>

              {!!openModal && (
                <Modal>
                  <TodoFormDialog />
                </Modal>
              )}
            </InsetContainer>
          </Content>
          <Footer>
            <Paper sx={{ display: "flex", mr: 2, borderRadius: "20px", p: 1 }}>
              <Chip
                color="secondary"
                label={`© Desarrollado por Jhon Sanchez Vallejo`}
                icon={<Code />}
              />
              <Box flexGrow={1} />
              <TodoCounter />
              <Box flexGrow={1} />
            </Paper>
          </Footer>
          <CreateTodoFab setOpenModal={setOpenModal} />
        </Root>
      </Fullscreen>
    </ThemeProvider>
  );
}

export { AppUI };
