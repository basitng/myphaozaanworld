import React, { useId } from "react";
import Lottie from "react-lottie";
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AnimationData from "../../../public/lottie/100542-contact.json";
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";

export default function Contact() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const id = useId();
  const SocialLinks = [
    {
      name: "FaceBook",
      icon: <FacebookOutlined sx={{ color: "white" }} fontSize="large" />,
      id,
      path: "https://www.facebook.com/My-Phaozaan-World-107935241989788/",
    },
    {
      name: "Twitter",
      icon: <Twitter sx={{ color: "white" }} fontSize="large" />,
      id,
      path: "https://twitter.com/phaozaan?t=FjAgdn-3f2yXV3-2jTsjCw&s=08",
    },
    {
      name: "Instagram",
      icon: <Instagram sx={{ color: "white" }} fontSize="large" />,
      id,
      path: " https://www.instagram.com/invites/contact/?i=2im0wvwg9egd&utm_content=oxtd36t",
    },
  ];
  const PhaozanLinks = [
    { name: "Register", id, path: "" },
    { name: "School Portal", id, path: "" },
    { name: "Admin Panel", id, path: "" },
    { name: "Events", id, path: "" },
  ];

  return (
    <React.Fragment>
      <Box
        className="p20_10"
        sx={{
          mt: 10,
          p: 10,

          clipPath:
            "polygon(50% 0%, 76% 0, 100% 0, 100% 100%, 79% 96%, 58% 100%, 27% 96%, 0 100%, 0% 35%, 0 0)",
          "@media screen and (max-width: 600px)": {
            p: "50px 10px",
          },
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography variant="h6">Get in contact with us today</Typography>
            <Typography sx={{ mb: 2 }} variant="h2">
              Contact <span className="block--span">Us Now</span>
            </Typography>
            <TextField variant="standard" label="Full Name" fullWidth />
            <TextField
              sx={{ m: "1rem 0rem" }}
              variant="standard"
              label="Subject"
              fullWidth
            />
            <TextField
              variant="standard"
              multiline
              label="Messages"
              fullWidth
            />
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              size="large"
              disableElevation
            >
              Submit Message
            </Button>
          </Grid>

          <Grid item xs={12} md={5}>
            {" "}
            <Lottie options={defaultOptions} height={400} width={400} />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
