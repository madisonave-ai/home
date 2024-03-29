import React from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import { Content } from './components';

const CompanyTerms = (): JSX.Element => {
  return (
    <Main>
      <Box
        position={'relative'}
        minHeight={'calc(100vh - 247px)'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        height={1}
      >
        <Container>
          <Content />
        </Container>
      </Box>
    </Main>
  );
};

export default CompanyTerms;
