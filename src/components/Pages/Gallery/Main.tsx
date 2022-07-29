import { ImageList, ImageListItem } from "@mui/material";
import { Container } from "@mui/system";
import React, { useId } from "react";
import Breadcrum from "../../Breadcrum";
import { Footer } from "../../Sections";

export default function Main({ trigger }: any) {
  const images = [
    { img: "/1.jpg", id: useId(), title: "Creative Kids" },
    { img: "/2.jpg", id: useId(), title: "Fun Fun with Kids" },
    { img: "/3.jpg", id: useId(), title: "Lovely Kid" },
    { img: "/4.jpg", id: useId(), title: "Lucrative Kids" },
    { img: "/5.jpg", id: useId(), title: "Brilliant Kids" },
    { img: "/6.png", id: useId(), title: "Cool Kids" },
  ];
  return (
    <React.Fragment>
      <div ref={trigger}>
        <Breadcrum header="Our Gallery" img={"/images/art2.jpg"} />
      </div>
      <Container sx={{ mb: 10, mt: 3 }}>
        <ImageList variant="woven" cols={3} gap={8}>
          {images.map((image) => (
            <ImageListItem key={image.img}>
              <img
                src={`/images/${image.img}`}
                srcSet={`/images/${image.img}`}
                alt={image.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
