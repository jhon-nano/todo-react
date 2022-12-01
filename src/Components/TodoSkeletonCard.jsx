import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Grow,
  Skeleton
} from "@mui/material";
import React from "react";

export default function TodoSkeletonCard({index}) {
  return [...Array(index).fill(undefined)].map((task, index) => (
    <Grow
      key={index}
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 1000 } : {})}
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
            subheader={<Skeleton animation="wave" height={10} width="40%" />}
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
            <Skeleton animation="wave" height={10} width="80%" />
          </CardContent>
        </Card>
      </Grid>
    </Grow>
  ));
}
