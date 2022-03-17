// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  //textAlign: 'flex-start',
  padding: theme.spacing(3, 3),
  color: theme.palette.info,
  backgroundColor: theme.palette.info
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'center',
  textAlign: 'flex-end',
  borderRadius: '30%',
  alignItems: 'center',
  width: theme.spacing(7),
  height: theme.spacing(7),
  justifyContent: 'center',
  marginTop: theme.spacing(-4),
  marginRight: theme.spacing(-1),
  color: theme.palette.primary.dark,
  backgroundImage: `linear-gradient( #006677, #00CDCD 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 509085;

export default function AppWeeklySales({ title, total, growth, icon}) {
  return (
    <RootStyle>
      <Typography variant="subtitle2" sx={{ opacity: 0.72, display:'flex', '& > *': {mr: 5, mt: -5},}}>
        {title}
      </Typography>
      <Typography variant="h4">{total}</Typography>
      <IconWrapperStyle>
        <Iconify icon={icon} color='white' width={35} height={35} />
      </IconWrapperStyle>
      <br/>
      <Typography variant="subtitle7" sx={{ opacity: 0.72, display:'flex', '& > *': {mr: 5, mt: -5},}}>
        <Typography color='#18F4BF'>{growth}%&nbsp;</Typography>
        since last month
      </Typography>
    </RootStyle>
  );
}
