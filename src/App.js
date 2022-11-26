import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { Fragment, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import { drawerClasses } from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import { inputBaseClasses } from "@mui/material/InputBase";
import Skeleton from "@mui/material/Skeleton";

import {
  Content,
  EdgeSidebar,
  Footer,
  Fullscreen,
  Header,
  InsetContainer,
  InsetSidebar,
  Root,
  SidebarContent,
} from "@mui-treasury/layout";
import { Code, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { Chip, Grow, Paper, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import AppBarTodo from "./components/AppBarTodo";
import CardTask from "./components/CardTask";
import CreateTaks from "./components/CreateTaks";

// https://github.com/tailwindlabs/tailwindcss/blob/master/colors.js#L244
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

const GlobalTheme = () => {
  const [loading, setLoading] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState([]);
  console.log("sear", search);

  function onCompleted(task) {
    setLoading(true);
    setTimeout(() => {
      const dataUpdate = [...tasks];
      const index = tasks.findIndex((e) => e.title === task.title);
      task.completed = true;
      dataUpdate[index] = task;
      setTasks([...dataUpdate]);
      setLoading(false);
    }, 1000);
  }

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
                  width: 80,
                },
                md: {
                  variant: "permanent",
                  width: 80,
                },
              },
            },
          }}
        >
          <CssBaseline />
          <Header>
            <AppBarTodo
              tasks={tasks}
              setTasks={setTasks}
              setSearch={setSearch}
            />
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
              maxWidth={false}
              disableGutters
              rightSidebar={
                <InsetSidebar sx={{ p: 2, height: "100%" }}>
                  <CreateTaks
                    loading={loading}
                    setLoading={setLoading}
                    setTasks={setTasks}
                  />
                </InsetSidebar>
              }
              sx={{
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                bgcolor: "background.paper",
                mr: 2,
              }}
            >
              <Box p={2}>
                <Grid container spacing={2}>
                  {search == null ? (
                    [...Array(6).fill(undefined)].map((task, index) => (
                      <Grow
                        key={index}
                        in={true}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(true ? { timeout: 1000  } : {})}
                      >
                        <Grid item xs={12} sm={6} md={4}>
                          <Card variant="outlined">
                            <CardHeader
                              avatar={
                                <Skeleton
                                  animation="wave"
                                  variant="circular"
                                  width={40}
                                  height={40}
                                />
                              }
                              title={
                                <Skeleton
                                  animation="wave"
                                  height={10}
                                  width="80%"
                                  style={{ marginBottom: 6 }}
                                />
                              }
                              subheader={
                                <Skeleton
                                  animation="wave"
                                  height={10}
                                  width="40%"
                                />
                              }
                            />
                            <Skeleton
                              animation="wave"
                              variant="rectangular"
                              sx={{ height: "0px", pb: "56.25%" }}
                            />
                            <CardContent>
                              <Skeleton
                                animation="wave"
                                height={10}
                                style={{ marginBottom: 6 }}
                              />
                              <Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                              />
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grow>
                    ))
                  ) : search.length > 0 ? (
                    search.map((task, index) => (
                      <Grow
                        key={index}
                        in={true}
                        style={{ transformOrigin: "0 0 0" }}
                        {...(true ? { timeout: 1500 } : {})}
                      >
                        <Grid item xs={12} sm={6} md={4}>
                          <CardTask
                            tasks={tasks}
                            setTasks={setTasks}
                            task={task}
                            loading={loading}
                            setLoading={setLoading}
                          />
                        </Grid>
                      </Grow>
                    ))
                  ) : (
                    <Fragment>
                      {tasks.map((task, index) => (
                        <Grow
                          key={index}
                          in={true}
                          style={{ transformOrigin: "0 0 0" }}
                          {...(true ? { timeout: 1500 } : {})}
                        >
                          <Grid item xs={12} sm={6} md={4}>
                            <CardTask
                              tasks={tasks}
                              setTasks={setTasks}
                              task={task}
                              loading={loading}
                              setLoading={setLoading}
                              onCompleted={onCompleted}
                            />
                          </Grid>
                        </Grow>
                      ))}
                      {[
                        ...Array(
                          6 - tasks.length < 0 ? 0 : 6 - tasks.length
                        ).fill(undefined),
                      ].map((task, index) => (
                        <Grow
                          key={index}
                          in={true}
                          style={{ transformOrigin: "0 0 0" }}
                          {...(true ? { timeout: 1000 * index } : {})}
                        >
                          <Grid item xs={12} sm={6} md={4}>
                            <Card variant="outlined">
                              <CardHeader
                                avatar={
                                  <Skeleton
                                    animation="wave"
                                    variant="circular"
                                    width={40}
                                    height={40}
                                  />
                                }
                                title={
                                  <Skeleton
                                    animation="wave"
                                    height={10}
                                    width="80%"
                                    style={{ marginBottom: 6 }}
                                  />
                                }
                                subheader={
                                  <Skeleton
                                    animation="wave"
                                    height={10}
                                    width="40%"
                                  />
                                }
                              />
                              <Skeleton
                                animation="wave"
                                variant="rectangular"
                                sx={{ height: "0px", pb: "56.25%" }}
                              />
                              <CardContent>
                                <Skeleton
                                  animation="wave"
                                  height={10}
                                  style={{ marginBottom: 6 }}
                                />
                                <Skeleton
                                  animation="wave"
                                  height={10}
                                  width="80%"
                                />
                              </CardContent>
                            </Card>
                          </Grid>
                        </Grow>
                      ))}
                    </Fragment>
                  )}
                </Grid>
              </Box>
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
              <Typography
                variant="h4"
                align="right"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("TODO MACHINE")
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </Typography>
            </Paper>
          </Footer>
        </Root>
      </Fullscreen>
    </ThemeProvider>
  );
};

export default GlobalTheme;
