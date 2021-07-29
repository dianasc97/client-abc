import React, {useState, useCallback, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab';

import CollaboratorsService from '../../services/collaborator';

function Users() {
  const [name, setName] = useState();
  const [pis, setPis] = useState();
  const [registration, setRegistration] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    const url_string = window.location.href;
    const url = new URL(url_string);
    const param = url.searchParams.get("id")
    setId(param)
  }, []);

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();  

  const handleCollaboratorSubmit = useCallback(() => {
    const data = {
      name: name,
      pis: pis,
      registration: registration,
    };
    if(id) {
      CollaboratorsService.update(data, id).then(() => {
        setName('');
        setPis('');
        setRegistration('');
    })
    } else {
      CollaboratorsService.create(data).then(() => {
          setName('');
          setPis('');
          setRegistration('');
      }
      )
    }
  }, [name, pis, registration, id]);
  
  return (
    <>
     <Container component="main" maxWidth="xs">
      <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Cadastre-se
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <TextField
                    autoComplete="Nome"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Nome"
                    autoFocus
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="pis"
                    label="Pis"
                    name="pis"
                    autoComplete="Pis"
                    value={pis}
                    onChange={(event) => {
                        setPis(event.target.value);
                    }}
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="registration"
                    label="Matrícula"
                    id="registration"
                    autoComplete="Matrícula"
                    value={registration}
                    onChange={(event) => {
                        setRegistration(event.target.value)
                    }}
                />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                component="a" href="/"
                onClick={handleCollaboratorSubmit}
            >
                Cadastre-se
            </Button>            
            </form>
        </div>
        <Box mt={5}>
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            ABC SAPATOS
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
        </Box>
      </Container>
    );
        </>);
    }

export default Users;