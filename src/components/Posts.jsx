import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

import {
  Card,
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Posts = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={<Avatar>M</Avatar>}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title="Mohsen Jafari"
        subheader="Aban 14"
      />
      <CardMedia
        component={`img`}
        height={194}
        image="https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637289.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=ais"
      />
      <CardContent>
        <Typography variant="body2" color={`text.secondary`}>
          This impressive vibe fore me becouse i went FastFood Bar in Downtown
          and order a delicius food Sandwich
        </Typography>
        <CardActions disableSpacing>
          <IconButton>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "tomato" }} />}
            />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Posts;
