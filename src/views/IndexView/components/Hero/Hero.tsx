import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import useMediaQuery from '@mui/material/useMediaQuery';
import { alpha, useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const images = [
  {
    group: [
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-1.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-1.png',
      },
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-2.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-2.png',
      },
    ],
  },
  {
    group: [
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-3.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-3.png',
      },
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-4.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-4.png',
      },
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-5.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-5.png',
      },
    ],
  },
  {
    group: [
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-6.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-6.png',
      },
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-7.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-7.png',
      },
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-8.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-8.png',
      },
      {
        cover: 'https://cdn.madisonave.ai/assets/home/hero-9.png',
        coverDark: 'https://cdn.madisonave.ai/assets/home/hero-9.png',
      },
    ],
  },
];

const Hero = (): JSX.Element => {
  const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to bottom, ${alpha(
          theme.palette.background.paper,
          0,
        )}, ${alpha(theme.palette.alternate.main, 1)} 100%)`,
        backgroundRepeat: 'repeat-x',
        position: 'relative',
      }}
    >
      <Box paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}>
        <Container>
          <Box maxWidth={{ xs: 1, sm: '50%' }}>
            <Typography
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Generative AI for
              <br />
              digital ad{' '}
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                creatives.
              </Typography>
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="text.secondary"
              sx={{ fontWeight: 400 }}
            >
              Elevate the innovation process to new heights by augmenting human
              creativity with the limitless potential of artificial
              intelligence, unlocking a world of unprecedented possibilities to
              take your ad creatives to the next level. With cutting-edge
              technology and a wealth of resources at your disposal, your
              marketing efforts will achieve unparalleled success, driving
              growth and pushing boundaries like never before.
            </Typography>
            {/* <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
              marginTop={4}
            >
              <Button
                component={'a'}
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                href={'/home'}
              >
                View pages
              </Button>
              <Box
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                width={{ xs: '100%', md: 'auto' }}
              >
                <Button
                  component={'a'}
                  href={'/docs/introduction'}
                  variant="outlined"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                >
                  Documentation
                </Button>
              </Box>
            </Box> */}
          </Box>
        </Container>
        <Box
          sx={{
            transform: 'rotate(-20deg)',
            display: { xs: 'none', sm: 'block' },
          }}
        >
          <Box
            display={'flex'}
            width={'50rem'}
            left={'50%'}
            top={0}
            position={'absolute'}
            sx={{
              // transform: 'translate3d(20%, 40%, 0)',
              transform: 'translate3d(20%, -50%, 0)',
            }}
          >
            {/* <Box
              component={'img'}
              loading="lazy"
              src={'/images/robot-head.png'}
              height={1}
              width={1}
              maxWidth={320}
            /> */}

            {images.map((item, i) => (
              <Box key={i} marginTop={{ sm: -(i * 16) }} marginX={1}>
                {item.group.map((g, j) => (
                  <Box
                    key={j}
                    // padding={1}
                    bgcolor={'background.paper'}
                    borderRadius={2}
                    boxShadow={3}
                    marginTop={2}
                  >
                    <Box
                      component={'img'}
                      borderRadius={2}
                      boxShadow={3}
                      mb={'-5px'}
                      loading="lazy"
                      src={
                        theme.palette.mode === 'dark' ? g.coverDark : g.cover
                      }
                      height={1}
                      width={1}
                      maxWidth={320}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          width: '100%',
          marginBottom: theme.spacing(-1),
        }}
      >
        <path
          fill={theme.palette.background.paper}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
    </Box>
  );
};

export default Hero;
