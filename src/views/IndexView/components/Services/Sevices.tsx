import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import {
  ImageOutlined,
  ShortTextOutlined,
  NotesOutlined,
} from '@mui/icons-material';

const mock = [
  {
    title: 'Images',
    subtitle:
      'Discover a vast array of stunning stock images with our intelligent image search engine, or unleash your creativity with state-of-the-art AI-powered image creation tools.',
    icon: <ImageOutlined />,
  },
  {
    title: 'Headlines',
    subtitle:
      'Utilize the power of AI to craft compelling, impactful and attention-grabbing headlines that generate exceptional results.',
    icon: <ShortTextOutlined />,
  },
  {
    title: 'Descriptions',
    subtitle:
      'Transform your ad descriptions into highly-engaging, top-performing marketing copy with the unmatched precision and creativity of AI. ',
    icon: <NotesOutlined />,
  },
];

const Services = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Box marginBottom={2}>
          <Typography
            variant="h4"
            color="text.primary"
            align={'center'}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            AI-Powered Ad Creative Testing and Tracking
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            Effortlessly design, structure and optimize ad creatives using
            advanced AI technology to conduct comprehensive multi-variant
            testing, and accurately track their superior performance
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  color={theme.palette.primary.main}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}
                >
                  {item.title}
                </Typography>
                <Typography align={'center'} color="text.secondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
