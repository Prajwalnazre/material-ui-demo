import  React, { useState } from 'react';
import clsx from 'clsx';

import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, Grid, Container, Toolbar, CssBaseline } from '@material-ui/core';
import { CardHeader, Collapse, Avatar, IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

import ImageCard from './components/ImageCards/ImageCard';

const App = () => {
    const classes = useStyles();
    // const [expanded, setExpanded] = React.useState(false);

    // const handleClick = () => {
    //     setExpanded(!expanded);
    // }

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
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
                        <div className={classes.buttons}>
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
                        </div>
                    </Container>
                    <div>
                        <Grid container spacing={2} justify="center" 
                        direction="row" 
                        justifyContent="center"
                        alignItems="flex-start"
                        >
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                            <Grid item spacing={3} xs={12} sm={6} md={4}>
                                <ImageCard />
                            </Grid>
                        </Grid>
                        
                    </div>
                </div>
                
            </main>
        </>
    )
}

export default App;