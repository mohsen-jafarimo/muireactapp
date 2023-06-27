import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  const friends = [
    {
      id: 1,
      avatar:
        "https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=sph",
    },
    {
      id: 2,
      avatar:
        "https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=sph",
    },
    {
      id: 3,
      avatar:
        "https://img.freepik.com/free-photo/medium-shot-happy-man-smiling_23-2148221808.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=sph",
    },
    {
      id: 4,
      avatar:
        "https://img.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms_176420-12083.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=sph",
    },
    {
      id: 5,
      avatar:
        "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=sph",
    },
    {
      id: 6,
      avatar:
        "https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=sph",
    },
  ];
  return (
    <Box flex={2} sx={{ display: { xs: "none", sm: "block" } }} p={2}>
      <Box position="fixed">
        <Typography mb={3}>Online Friends</Typography>
        <AvatarGroup max={4}>
          {friends.map((person) => {
            return <Avatar key={person.id} src={person.avatar} />;
          })}
        </AvatarGroup>
        <Typography mb={3}>Latest Posts</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/erawan-waterfall-autumn-thailand-beautiful-waterfall-with-emerald-pool-nature_335224-777.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=sph"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/wooden-surface-looking-out-empty-restaurant_23-2147701348.jpg?size=626&ext=jpg&ga=GA1.1.2008094614.1687630373&semt=sph"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://img.freepik.com/free-photo/people-business-meeting-high-angle_23-2148911819.jpg?size=626&ext=jpg&ga=GA1.2.2008094614.1687630373&semt=sph"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography mt={3}>Latest Converstation</Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default RightBar;
