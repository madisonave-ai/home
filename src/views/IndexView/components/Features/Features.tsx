// /* eslint-disable react/no-unescaped-entities */
// import React, { useState } from 'react';
// import CountUp from 'react-countup';
// import VisibilitySensor from 'react-visibility-sensor';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// const mock = [
//   {
//     title: 'Zemanta',
//     subtitle: 'Zemanta',
//     suffix: '',
//   },
//   {
//     title: 'Facebook',
//     subtitle: 'Facebook',
//     suffix: '',
//   },
//   {
//     title: 'Google',
//     subtitle: 'Coming soon...',
//     suffix: '',
//   },
// ];

const Features = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // const [viewPortEntered, setViewPortEntered] = useState(false);
  // const setViewPortVisibility = (isVisible) => {
  //   if (viewPortEntered) {
  //     return;
  //   }

  //   setViewPortEntered(isVisible);
  // };

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Typography sx={{ fontWeight: 700 }} variant={'h4'} gutterBottom>
              Maximizing Advertising Impact
            </Typography>
            <Typography variant={'h6'} component={'p'} color={'text.secondary'}>
              Seamlessly integrate with the most influential and high-performing
              networks in the industry, allowing your advertising efforts to
              reach new heights of success. Our platform's advanced integration
              capabilities facilitate smooth and effortless collaboration with
              major networks, ensuring maximum reach and impact for your
              campaigns. With unparalleled access to the most powerful
              advertising networks, you can confidently connect with your target
              audience, capture their attention, and achieve your goals with
              ease.
            </Typography>
          </Box>
          {/* <Grid container spacing={2}>
            {mock.map((item, i) => (
              <Grid key={i} item xs={12} md={4}>
                <Typography variant="h4" color={'primary'} gutterBottom>
                  {item.title}
                  <VisibilitySensor
                    onChange={(isVisible) => setViewPortVisibility(isVisible)}
                    delayedCall
                  >
                    <CountUp
                      duration={2}
                      end={viewPortEntered ? item.title : 0}
                      start={0}
                      suffix={item.suffix}
                    />
                  </VisibilitySensor>
                </Typography>
                <Typography color="text.secondary" component="p">
                  {item.subtitle}
                </Typography>
              </Grid>
            ))}
          </Grid> */}
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
