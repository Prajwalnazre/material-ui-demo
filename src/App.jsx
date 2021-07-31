import  React from 'react';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, Cssbaseline, Grid, Container, Toolbar, CssBaseline } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis vitae voluptatum optio expedita laborum voluptate commodi quisquam libero repellat nemo cum, repellendus atque maiores corrupti harum eveniet, omnis, facere ratione.
                        </Typography>
                        <Grid container spacing={2} justify="center"> 
                            <Grid item>
                                <Button variant="contained" color="primary">
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color="primary">
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App;