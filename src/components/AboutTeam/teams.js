import React from 'react';
import { Zoom } from "react-slideshow-image";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import memberDetails from '../../utils/membersProfile';
import { NavBar } from '../navBar/navBar';
import './team.scss';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 440,
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    arrows: false,
    onChange: (oldIndex, newIndex) => {
        console.log(`fade transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slideshow = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <NavBar />
            <br /> <br />
            <div className="slide-container">
                <Zoom {...zoomOutProperties}>
                    {
                        memberDetails.map(data => {
                            return (
                                <Grid container wrap='nowrap' spacing={0}>
                                    <Grid item xs={4}>
                                        <Card className={classes.card} style={{ textAlign: 'left' }}>
                                            <CardActionArea>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {data.bio}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {data.Designation}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Card className={classes.card}>
                                            <CardActionArea>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={data.profile}
                                                    title={data.name}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {data.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {data.Designation}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
                </Zoom>
            </div>
        </React.Fragment>
    )
}

export default Slideshow;