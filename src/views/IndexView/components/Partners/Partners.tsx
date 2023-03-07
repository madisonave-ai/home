// /* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
// import Typography from '@mui/material/Typography';

const mock = ['facebook', 'google', 'zemanta'];

const Partners = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Stack
      direction={'row'}
      spacing={2}
      flexWrap="wrap"
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      {mock.map((item, i) => (
        <Box
          component="img"
          height={100}
          key={i}
          src={`https://cdn.madisonave.ai/assets/networks/${item}.png`}
          alt={item}
          sx={{
            filter:
              theme.palette.mode === 'dark'
                ? 'brightness(0) invert(0.7)'
                : 'none',
          }}
        />
      ))}
    </Stack>
  );
};

export default Partners;
