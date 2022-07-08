import React, { useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FormatQuoteOutlined, Slideshow } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Testimonials() {
  const id = useId();
  const Stories = [
    {
      name: "Ajaga Abdul-Basit",
      id,
      review:
        "Phaozan school is a good school with the commitment to train future leaders",
      role: "CEO of Virtual Portal",
      img: "/images/ceo.jpg",
    },
    {
      name: "George Hunter",
      id,
      role: "Child Philosopher",
      review:
        "Phaozan school is a unique school that is very innovative and takes her wards extremely serious",
      img: "/images/man 2.jpg",
    },
    {
      name: "Khalid Bakare",
      role: "Parent",
      id,
      review:
        "Phaozan school is a prestigious school that takes dicipline as a piroty",
      img: "/images/man 3.jpg",
    },
  ];

  return (
    <Box
      sx={{
        mt: 10,
        width: "100%",
        background: "url(/images/art2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::before": {
          content: `""`,
          height: "100%",
          width: "100%",
          background: "linear-gradient(90deg, var(--theme3), var(--theme4))",
          opacity: 0.8,
          position: "absolute",
          top: 0,
          left: 0,
        },
      }}
    >
      <Box
        className="p50_5 center_mobile"
        sx={{ color: "#fff", p: 10, position: "relative", zIndex: 2 }}
      >
        <Typography variant="h2" className="responsive--h2">
          Our awesome <span className="block--span">Testimonials</span>
        </Typography>
        <Typography
          sx={{ width: "60%", color: "#ddd" }}
          className="responsive--width"
          variant="h5"
        >
          Phaozan is well recognized for her incredible educational services and
          raising of future leaders
        </Typography>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          speed={600}
          navigation
          pagination
          style={{ overflow: "hidden" }}
        >
          {Stories.map((story) => (
            <SwiperSlide key={story.id}>
              <Box
                sx={{
                  pt: 5,
                  display: "grid",
                  placeContent: "center",
                  placeItems: "center",
                }}
              >
                <Box
                  sx={{
                    background: "#fff",
                    width: "65%",
                    display: "grid",
                    placeContent: "center",
                    placeItems: "center",
                    textAlign: "center",
                    p: 5,
                    borderTopLeftRadius: "1.5rem",
                    borderBottomRightRadius: "1.5rem",
                  }}
                  className="responsive--width_80"
                >
                  <Typography color="GrayText" variant="body1">
                    <FormatQuoteOutlined color="secondary" />
                    {story.review}
                    <FormatQuoteOutlined color="secondary" />
                  </Typography>

                  <Avatar
                    src={story.img}
                    sx={{ width: 100, height: 100, mt: 1 }}
                  />
                  <Typography
                    sx={{ pt: 2, pb: 0.5 }}
                    fontWeight={"bold"}
                    color="GrayText"
                    variant="body1"
                  >
                    {story.name}
                  </Typography>
                  <Typography sx={{ pb: 1 }} color="GrayText" variant="body2">
                    {story.role}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
