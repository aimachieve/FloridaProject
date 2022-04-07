import React, { Fragment } from 'react';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
// material
import { styled } from '@material-ui/core/styles';
import { Box, Button, AppBar, Toolbar, Container, Stack } from '@material-ui/core';
// hooks
import useOffSetTop from '../../hooks/useOffSetTop';
// components
import Logo from '../../components/Logo';
import { MHidden } from '../../components/@material-extend';
//
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';
import navConfig from './MenuConfig';
// 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 79;
const APP_BAR_DESKTOP = 132;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.longer
  }),
  [theme.breakpoints.up('md')]: {
    height: APP_BAR_DESKTOP
  }
}));

const ToolbarShadowStyle = styled('div')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  height: 24,
  zIndex: -1,
  margin: 'auto',
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.customShadows.z8
}));

// ----------------------------------------------------------------------

const MainNavbar = ({ auth: { isAuthenticated, user }, logout }) => {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const authLinks = (
    <Stack spacing={2} direction="row" alignItems="center">
      <Link style={{fontSize: '20px', fontWeight: 'bold'}} to="/profiles">Users</Link>
      <Link style={{fontSize: '20px', fontWeight: 'bold'}} to="/posts">Posts</Link>
      <Link style={{fontSize: '20px', fontWeight: 'bold'}} to="/dashboard">Dashboard</Link>
      <Link style={{fontSize: '20px', fontWeight: 'bold'}} to="#!">
        <i className="fas fa-user" />{' '}
        <span className="hide-sm">{user && user.name}</span>
      </Link>
      <Button variant="outlined" onClick={logout}>
        <i className="fas fa-sign-out-alt" />{'  '}
        <span className="hide-sm">Logout</span>
      </Button>
    </Stack>
  );

  const guestLinks = (
    <Stack spacing={2} direction="row" alignItems="center">
      <Link style={{fontSize: '20px', fontWeight: 'bold'}} to="/profiless">Users</Link>
      <Button component={RouterLink} variant="outlined" to="/register">
        Register
      </Button>
      <Button component={RouterLink} variant="contained" to="/login">
        Login
      </Button>
    </Stack>
  );

  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: 'transparent', marginBottom: 50 }}>
      <ToolbarStyle
        disableGutters
        sx={{
          ...(isOffset && {
            bgcolor: 'background.defat',
            height: { md: APP_BAR_DESKTOP - 80 }
          })
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
            // pr: 20
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                transition: 'transform 0.3s',
                width: { xs: '100px', md: '130px' },
                height: { xs: '100px', md: '130px' },
                ...(isOffset && {
                  transform: { xs: 'scale(0.8)', md: 'scale(0.6)' }
                }),
                // marginTop: {xs: 15, md: 0}
              }}
            />
          </RouterLink>
          <Box sx={{ flexGrow: 1 }} />

          {/* <MHidden width="mdDown">
            <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden>

          <Stack direction="row" spacing={2}>
            <Button component={RouterLink} variant="outlined" to="/register">
              Register
            </Button>
            <Button component={RouterLink} variant="contained" to="/login">
              Login
            </Button>
          </Stack>

          <MHidden width="mdUp">
            <MenuMobile isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
          </MHidden> */}

          <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
        </Container>
      </ToolbarStyle>

      {isOffset && <ToolbarShadowStyle />}
    </AppBar>
  );
}

MainNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(MainNavbar);