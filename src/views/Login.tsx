import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, Typography, TextField, Button,
  // Link
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import '../index.css';
import '../App.css';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="background-container"></div>
      <Container component="main" maxWidth="xs" style={{ position: 'relative'}}>
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            mb: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ color: '#C9F305', fontWeight: 'bold' }}>
            Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email | Use your Racquets!™ account"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className="greenBtn"
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 3, mb: 5, borderRadius: '8px', padding: '5px 15px', margin: '5 5px',
                bgcolor: '#3C1C91', color: '#FFF', fontWeight: 'bold', 
                // textTransform: 'none',
                ':hover': { bgcolor: 'white', color: '#3C1C91' }
               }}
            >
              Log In
            </Button>
            <Grid container
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Grid>
                <Typography
                  sx={{ color: '#fff', textDecoration: 'none' }}>
                  Don't have a Racquets! AppSuite™ account?
                </Typography>
              </Grid>
              <Grid
                container direction="row" justifyContent="center" alignItems="center" spacing={10}
                sx={{ flexGrow: 1, height: '30px' }}
              >
                <Grid>
                  <Button
                    variant="contained"
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.terracomsortium.tapps&hl=es_CO"
                    sx={{
                      mt: 3, mb: 5, borderRadius: '8px', padding: '5px 15px', margin: '5 5px',
                      bgcolor: '#3C1C91', color: '#FFF', fontWeight: 'bold', 
                      textTransform: 'none',
                      ':hover': { bgcolor: 'white', color: '#3C1C91' }
                     }}
                  >
                    Google play store
                  </Button>
                </Grid>
                <Grid>
                  <Button
                    variant="contained" target="_blank"
                    href="https://apps.apple.com/co/app/racquetsappsuite/id1592585843"
                    sx={{
                      mt: 3, mb: 5, borderRadius: '8px', padding: '5px 15px', margin: '5 5px',
                      bgcolor: '#3C1C91', color: '#FFF', fontWeight: 'bold', 
                      textTransform: 'none',
                      ':hover': { bgcolor: 'white', color: '#3C1C91' }
                    }}
                  >
                    Apple Store
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}