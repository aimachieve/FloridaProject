import { useRef } from 'react';
import Slider from 'react-slick';
import React from "react"
import PropTypes from 'prop-types';
// material
import { styled } from '@material-ui/core/styles';
import { Stack, Button, Box } from '@material-ui/core';
// ----------------------------------------------------------------------

const MOCK_CAROUSELS = [
  {
    id: 1,
    title: 'Product 01',
    image: '/photographer/download.jfif',
    description: 'Instruments'
  },
  {
    id: 2,
    title: 'Product 02',
    image: '/photographer/fat.jfif',
    description: 'Instruments'
  },
  {
    id: 3,
    title: 'Product 03',
    image: '/photographer/girl.jfif',
    description: 'Instruments'
  },
  {
    id: 4,
    title: 'Product 04',
    image: '/photographer/man.webp',
    description: 'Instruments'
  },
  {
    id: 5,
    title: 'Product 05',
    image: '/photographer/woman.jfif',
    description: 'Instruments'
  },
  {
    id: 6,
    title: 'Product 06',
    image: '/photographer/woman.jpg',
    description: 'Instruments'
  },
  {
    id: 1,
    title: 'Product 01',
    image: '/photographer/download.jfif',
    description: 'Instruments'
  },
  {
    id: 2,
    title: 'Product 02',
    image: '/photographer/fat.jfif',
    description: 'Instruments'
  },
  {
    id: 3,
    title: 'Product 03',
    image: '/photographer/girl.jfif',
    description: 'Instruments'
  },
  {
    id: 4,
    title: 'Product 04',
    image: '/photographer/man.webp',
    description: 'Instruments'
  },
  {
    id: 5,
    title: 'Product 05',
    image: '/photographer/woman.jfif',
    description: 'Instruments'
  },
  {
    id: 6,
    title: 'Product 06',
    image: '/photographer/woman.jpg',
    description: 'Instruments'
  },
  {
    id: 1,
    title: 'Product 01',
    image: '/photographer/download.jfif',
    description: 'Instruments'
  },
  {
    id: 2,
    title: 'Product 02',
    image: '/photographer/fat.jfif',
    description: 'Instruments'
  },
  {
    id: 3,
    title: 'Product 03',
    image: '/photographer/girl.jfif',
    description: 'Instruments'
  },
  {
    id: 4,
    title: 'Product 04',
    image: '/photographer/man.webp',
    description: 'Instruments'
  },
  {
    id: 5,
    title: 'Product 05',
    image: '/photographer/woman.jfif',
    description: 'Instruments'
  },
  {
    id: 6,
    title: 'Product 06',
    image: '/photographer/woman.jpg',
    description: 'Instruments'
  },
];
const RootStyle = styled('div')(({ theme }) => ({
  // overflow: 'hidden',
  // padding: theme.spacing(18, 0),
  position: 'relative'
}));
// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object
};

function CarouselItem({ item }) {
  const { id, image } = item;

  return (
    <Box
      sx={{
        textAlign: 'center',
        mx: 1,
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'center',
        height: 170,
        background: `url(${image})`,
        backgroundSize: 'cover',
        boxShadow: '0px 4px 31px rgba(0, 0, 0, 0.11)',
        position: 'relative',
        mt: 3,
        mb: 1,
        position: 'relative',
        overflow: 'hidden',
        '&:hover': { 
          '& .overlay': { transform: 'translateY(0%)' } 
        }
      }}
    >
      <Stack
        className="overlay"
        alignItems="center"
        justifyContent="center"
        spacing={3}
        sx={{
          background: 'rgba(0, 0, 0, 0.7)',
          position: 'absolute',
          width: 1,
          height: 1,
          transform: 'translateY(-100%)',
          transition: 'transform 0.3s'
        }}
      >
          {/* <Button
            sx={{ width: 100, borderRadius: "20px" }}
            color="primary"
            variant="contained"
            href={`/bid/${id}`}
          >
            Bid
          </Button> */}
      </Stack>
    </Box>
  );
}

export default function CarouselCenterMode() {
  const carouselRef = useRef();

  const settings = {
    centerPadding: '60px',
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 5 }
      },
      {
        breakpoint: 960,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' }
      }
    ]
  };

  return (
    <RootStyle>
      <Slider ref={carouselRef} {...settings}>
        {MOCK_CAROUSELS.map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </Slider>
    </RootStyle>
  );
}
