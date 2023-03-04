// import React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import {
  // alpha,
  useTheme,
} from '@mui/material/styles';
// import MenuIcon from '@mui/icons-material/Menu';

// import { NavItem } from './components';
import { Link, Typography } from '@mui/material';

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSidebarOpen: () => void;
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
  colorInvert?: boolean;
}

const Topbar = ({
  // onSidebarOpen,
  // pages,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;
  // const {
  //   landings: landingPages,
  //   secondary: secondaryPages,
  //   company: companyPages,
  //   account: accountPages,
  //   portfolio: portfolioPages,
  //   blog: blogPages,
  // } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="MadisonAve AI"
        height={{ xs: 50, md: 65 }}
        sx={{ textDecoration: 'none' }}
      >
        <Box
          component={'img'}
          alignItems={'center'}
          src={
            mode === 'light' && !colorInvert
              ? '/apple-touch-icon.png'
              : '/apple-touch-icon.png'
          }
          height={0.5}
        />
        <Typography
          variant="h5"
          ml={1}
          color={colorInvert ? 'common.white' : 'text.primary'}
          display={{ xs: 'none', md: 'initial' }}
        >
          MadisonAve AI
        </Typography>
      </Box>
      {/* <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem
            title={'Landings'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box>
      </Box> */}
      <Link
        underline="none"
        component="a"
        href="/about"
        color={colorInvert ? 'common.white' : 'text.primary'}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        About Us
      </Link>

      {/* <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box> */}
    </Box>
  );
};

export default Topbar;
