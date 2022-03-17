// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppWeeklySales,
  AppWebsiteVisits,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Dashboard Daily</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2} md={3}>
            <AppWeeklySales title="Today's Followers" total='509085' growth='12,72' icon='heroicons-solid:user-group'/>
          </Grid>
          <Grid item xs={12} sm={2} md={3}>
            <AppWeeklySales title="Target Followers" total='50,000' growth='3,97' icon='fluent:target-arrow-20-filled'/>
          </Grid>
          <Grid item xs={12} sm={2} md={3}>
            <AppWeeklySales title="Total Growth" total='52,948' growth='3,97' icon='akar-icons:statistic-up'/>
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={8} lg={4}>
            <AppTasks />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
