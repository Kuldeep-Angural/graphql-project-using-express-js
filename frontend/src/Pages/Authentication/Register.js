import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'EventManager © '}
      <Link color="inherit" href="https://:google.com">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {

  const [data,setData]=React.useState("");
  const handelChange=(event,props)=>{
    setData({...data,[props]:event.target.value})
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const email=data.email;
    const password=data.password;
    console.log(email,password);
    const request={
      query:`
      mutation {
        createUser(userInput:{email:"${email}", password:"${password}"}){
          _id
          email
        }
      }
      `
    };
    fetch('http://localhost:8081/graphql',{
    method:'POST',
    body:JSON.stringify(request),
     headers:{
      'Content-type':'application/json'
     }

    }).then((resp)=>{
      if(resp.status!== 200 && resp.status!== 2001){
        throw new Error('Failed');
      }
     
        resp.json();
     

    }).then((respData)=>{
      console.log(respData);
    }).catch((error)=>{
      console.log(error);
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
         

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e)=>handelChange(e,"email")}
              value={data.email}
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
              onChange={(e)=>handelChange(e,"password")}
              value={data.password}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor:"green" }}
            >
              Sign Up
            </Button>
            <Grid container>
             
              <Grid item>
                <NavLink to="/signin" variant="body2">
                  {"Already have an account? Sign in"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}