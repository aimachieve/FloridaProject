// material
import { styled } from '@material-ui/core/styles';
import { Box, Grid, Container, Typography, Stack } from '@material-ui/core';
//
import { MotionInView, varFadeInUp, varFadeInDown, varFadeInLeft, varFadeInRight } from '../../animate';
import LandingSlider from 'components/carousel/LandingSlider'

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(10),
  // background: 'url(/images/content-bg.png)',
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover'
}));

// ----------------------------------------------------------------------

export default function LandingArtists() {
  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" sx={{ mb: 3, textAlign: 'center', fontFamily: 'Poppins', color: '#1FA0F4' }}>
            Browse landscaping artists
          </Typography>
          <Typography sx={{ mb: 3, fontSize: 14, lineHeight: '16px', fontWeight: 400, textAlign: 'center' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </Typography>
        </MotionInView>
        <LandingSlider />
      </Container>
      <Stack direction="row" justifyContent="space-around" alignItems="center" mt={5}>
        <MotionInView variants={varFadeInUp}>
          <Box component="img" src="/images/device1.png" sx={{ width: '100%' }} />
        </MotionInView>
        <MotionInView variants={varFadeInRight}>
          <Box component="img" src="/images/device2.png" sx={{ width: '100%' }} />
        </MotionInView>
      </Stack>
    </RootStyle>
  );
}
