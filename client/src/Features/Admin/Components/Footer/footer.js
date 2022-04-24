import { Box, Container, Typography } from '@material-ui/core';

export const Footer = () => (
  <Box component="footer">
    <Container maxWidth="lg">
      <Box
        sx={{
          backgroundColor: '#F5F5F5',
          display: 'flex',
          flexDirection: {
            md: 'row',
            xs: 'column'
          },
          marginBottom: 6,
          p: 3,
          '& a': {
            mt: {
              md: 0,
              xs: 2
            }
          }
        }}
      >
        <Typography
          color="textSecondary"
          variant="body2"
        >
          © 2022 Develop
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
          Lại Đức Hiển - Hồ Minh Hải - Đàm Văn Hiếu
      </Box>
    </Container>
  </Box>
);
