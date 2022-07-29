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
import Link from "next/link";

export default function Footer() {
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
  const QuickLinks = [
    { name: "Home", id, path: "" },
    { name: "About Us", id, path: "" },
    { name: "News", id, path: "" },
    { name: "Gallery", id, path: "" },
  ];
  const PhaozanLinks = [
    // { name: "Register", id, path: "" },
    { name: "School Portal", id, path: "" },
    { name: "Admin Panel", id, path: "" },
    { name: "Events", id, path: "" },
  ];

  return (
    <React.Fragment>
      <Box
        sx={{ position: "relative", background: "#111", color: "#fff", p: 10 }}
        className="p50_5"
      >
        <Grid
          container
          className="mb10_mobile"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={4}>
            <Typography variant="h4">Phaozan School</Typography>
            <Box
              className="m-5-mobile"
              sx={{ display: "flex", mt: 5, alignItems: "center" }}
            >
              {SocialLinks.map((link) => (
                <IconButton key={link.id} sx={{ m: 1, background: "#222" }}>
                  <Link href={link.path}>
                    <Tooltip title={link.name}>{link.icon}</Tooltip>
                  </Link>
                </IconButton>
              ))}
            </Box>
            <Link href="basitng.vercel.app" passHref={true}>
              {" "}
              <Typography
                className="plc_b_responsive"
                sx={{ mt: 1 }}
                variant="body1"
              >
                {
                  "Copyright 2022, Phaozan School's, Lagos | Powered by: Basitng"
                }
              </Typography>
            </Link>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={6}
            md={4}
          >
            <Typography variant="h5" color="white">
              Quick Links
            </Typography>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {QuickLinks.map((link) => (
                <Link key={link.id} href={link.path}>
                  <Typography
                    variant="body1"
                    sx={{
                      m: 1,
                      cursor: "pointer",
                      transition: "300ms ease-out",
                      "&:hover": { color: "var(--theme3)" },
                    }}
                    color="white"
                  >
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </ul>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            item
            xs={6}
            md={4}
          >
            <Typography variant="h5" color="white">
              Phaozan
            </Typography>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {PhaozanLinks.map((link) => (
                <Link key={link.id} href={link.path} passHref={true}>
                  <Typography
                    sx={{
                      m: 1,
                      cursor: "pointer",
                      transition: "300ms ease-out",
                      "&:hover": { color: "var(--theme3)" },
                    }}
                    variant="body1"
                    color="white"
                  >
                    {link.name}
                  </Typography>
                </Link>
              ))}
            </ul>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
