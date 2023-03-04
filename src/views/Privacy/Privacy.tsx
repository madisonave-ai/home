import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import PrivacyContent from './components/PrivacyContent';

const Privacy = (): JSX.Element => {
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
          <PrivacyContent />
        </Container>
      </Box>
    </Main>
  );
};

export default Privacy;
