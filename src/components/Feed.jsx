import {
  Box,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import Posts from "./Posts";
import {
  Add,
  CalendarMonth,
  CameraAlt,
  Image,
  PersonAdd,
  PlayCircle,
} from "@mui/icons-material";

const Feed = () => {
  const [open, setOpen] = useState(false);
  const CustomModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <>
      <Box flex={4} p={2} sx={{ width: { xs: "100%" } }}>
        <Tooltip title="Add Post" bgcolor="white">
          <Fab color="primary" aria-label="add">
            <Add onClick={(e) => setOpen(true)} />
          </Fab>
        </Tooltip>
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
      </Box>
      <CustomModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          bgcolor={`background.default`}
          color={`text.primary`}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <TextField
            id="standard-basic"
            label="text your vibe"
            variant="standard"
          />
          <Stack direction="row" my={4} spacing={2}>
            <PlayCircle color="primary" />
            <Image color="secondary" />
            <CameraAlt color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth>
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <CalendarMonth />
            </Button>
          </ButtonGroup>
        </Box>
      </CustomModal>
    </>
  );
};

export default Feed;
