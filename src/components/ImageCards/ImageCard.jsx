import  React, { useState } from 'react';
import clsx from 'clsx';
import { CardHeader, Collapse, Avatar, IconButton, Card, CardActions, CardContent, CardMedia, Grid, Container, Toolbar, CssBaseline  } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from './styles';

const ImageCard = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
    }

    return (
        <>
            <Card>
                <CardHeader 
                    avatar = {
                        <Avatar aria-label="random_person" className={classes.avatar}>
                            P
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Random Image Below"
                    subheader="Random subheader here"
                />
                <CardMedia className={classes.image} 
                    image="https://source.unsplash.com/random"
                    title="random_image"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Random Text again! Lorem ipsum dolor sit, amet consectetur 
                        adipisicing elit. Sapiente, laborum ad distinctio officiis 
                        tenetur cum sunt accusamus saepe odio recusandae.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="Add to Favourites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]:expanded,
                        })}
                        onClick={handleClick}
                        aria-expanded={expanded}
                        aria-label="Show More"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ipsa veritatis minima ipsam, autem reiciendis qui 
                            repellendus est facilis, aspernatur a natus voluptatem 
                            nulla, voluptates repudiandae.
                        </Typography>
                        <Typography paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Provident nam est facilis culpa eligendi explicabo 
                            numquam ipsam quaerat temporibus quas, animi doloremque 
                            alias officiis debitis quod ex, autem doloribus 
                            molestias!
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

export default ImageCard;