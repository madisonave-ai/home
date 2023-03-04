import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const QuickStart = (): JSX.Element => {
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
            Engage Audience with Cutting-Edge Tech
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
            align={'center'}
          >
            Unlock a world of possibilities to captivate and convert your
            audience, leveraging cutting-edge technology to deliver exceptional
            results every time. Experience effortless ease and flexibility as
            our platform offers seamless support for multiple languages while
            intelligently adapting to network constraints. With unparalleled
            optimization capabilities, your advertising efforts will reach new
            heights, effortlessly transcending language and network limitations
            to deliver superior performance.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default QuickStart;
