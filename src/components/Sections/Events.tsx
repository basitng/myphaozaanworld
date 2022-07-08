import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import React, { useId } from "react";

export default function Events() {
  const id = useId();
  const content =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta? Modi recusandae perferendis quis corporis ab natus eum.s";
  const categories = ["Sport", "Happy", "Events", "Fun"];
  const News = [
    {
      title: "Pupils Spelling Bee",
      img: "/images/spelling.jpg",
      categories,
      id,
      content,
    },
    {
      title: "Pupils Graduation",
      img: "/images/black.png",
      categories,
      id,
      content,
    },
    {
      title: "Pupils Pair Meet",
      img: "/images/banner3.jpg",
      categories,
      id,
      content,
    },
    {
      title: "Art Monday",
      img: "/images/art1.jpg",
      categories,
      id,
      content,
    },
  ];
  return (
    <Box sx={{ mt: 10 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="body2">We keep you updated</Typography>
        <Typography variant="h3">Latest Events</Typography>
      </Box>
      <Grid container spacing={2}>
        {News.map((data) => (
          <Grid key={data.id} item xs={12} md={4}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                height="200"
                image={data.img}
                alt={data.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {data.content}
                </Typography>
              </CardContent>
              <Box sx={{ display: "flex" }}>
                {data.categories.map((cat) => (
                  <Chip
                    sx={{ m: 1 }}
                    key={cat}
                    variant="outlined"
                    label={cat}
                  />
                ))}
              </Box>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
