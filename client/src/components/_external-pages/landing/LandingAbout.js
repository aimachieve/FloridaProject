// material
import { styled } from '@material-ui/core/styles';
import { Button, Container, Typography } from '@material-ui/core';
//
import { varFadeInUp, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  margin: theme.spacing(12, 0, 12, 0),
}));

const ContentStyle = styled('div')(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(10),
  background: 'url(/landscape/right.jfif)',
  backgroundSize: '500px, 700px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    marginBottom: 0
  }
}));
// ----------------------------------------------------------------------

export default function LandingHugeAbout() {
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography variant="h2" sx={{ mb: 3, fontFamily: 'Poppins', color: "#1FA0F4" }}>
              Endless Options
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                mb: 5,
                color: {xs: 'white', md: 'text.secondary'}
              }}
            >
              Choose freom hundreds of different Equipment Catagories and Equipment Owners <br /> You name it we can
              find someone who has the Equipment you looking for.
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Button size="large" variant="outlined">
              Browse catalog
            </Button>
          </MotionInView>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
