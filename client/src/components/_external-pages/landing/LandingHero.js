import { motion } from 'framer-motion';
// material
import { styled } from '@material-ui/core/styles';
//
import C5 from 'components/carousel/CarouselThumbnail'
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  // backgroundColor: theme.palette.grey[400],
  // background: 'url(/images/hero-bg.png)',
  // backgroundSize: 'cover',
  [theme.breakpoints.up('md')]: {
    // paddingTop: theme.spacing(15),
  }
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle>
        <C5 />
      </RootStyle>
    </>
  );
}
