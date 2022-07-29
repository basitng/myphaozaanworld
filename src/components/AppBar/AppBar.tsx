import React, { useId } from "react";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Appbar({ bg, color, raised }: any) {
  const id = useId();
  const myRef = React.useRef();
  const { pathname } = useRouter();
  const links = [
    { name: "Home", path: "/", id },
    { name: "About Us", path: "/about", id },
    { name: "News", path: "/news", id },
    { name: "Gallery", path: "/gallery", id },
    // { name: "Enroll", path: "/register", id },
  ];

  return (
    <React.Fragment>
      <AppBar
        elevation={raised}
        sx={{
          color: color,
          background: bg,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Image src="/images/logo.png" width="80px" height="80px" />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "@media screen and (max-width:  600px)": {
                display: "none",
              },
            }}
          >
            {links.map((link) => (
              <Link href={link.path} key={link.id}>
                <Typography
                  sx={{
                    m: 2,
                    color: pathname === link.path ? "var(--primary)" : color,
                    cursor: "Pointer",
                    transition: "400ms ease-in-out",
                    "&:hover": {
                      color: "var(--primary)",
                    },
                  }}
                  variant="body1"
                  color="GrayText"
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
            <Box sx={{ ml: 5 }}>
              <Button
                size="large"
                disableElevation
                variant="contained"
                color="primary"
              >
                School Portal
              </Button>
              <Link href="/contact">
                <Button
                  sx={{ ml: 1 }}
                  size="large"
                  variant="outlined"
                  color="primary"
                >
                  Contact us
                </Button>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
