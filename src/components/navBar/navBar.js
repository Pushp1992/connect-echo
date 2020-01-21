import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'right',
        // backgroundColor: "rgba(41, 39, 39, 0.938)",
        color: theme.palette.text.secondary,
    },
    pencil: {
        padding: theme.spacing(2),
        textAlign: 'center',
        position: 'relative',
        color: theme.palette.text.secondary,
    },
}));

// For Menu
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

export function NavBar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <img src="https://global-uploads.webflow.com/5d256c74852a390a60998230/5db13a2ff782f969a0559b2b_conlogo.svg" style={{width: '200px', height: '39px', textAlign: 'right', paddingRight: '3px'}} /> {" "} {" "}
                        <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>
                            Open Menu
                        </Button>
                        <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <GroupIcon fontSize="small" />
                                </ListItemIcon>
                                <Link to="/team-members">
                                    <ListItemText primary="Team Members" />
                                </Link>
                            </StyledMenuItem>
                            <StyledMenuItem>
                                <ListItemIcon>
                                    <HomeIcon fontSize="small" />
                                </ListItemIcon>
                                <Link to="/">
                                    <ListItemText primary="Home" />
                                </Link>
                            </StyledMenuItem>
                        </StyledMenu>
                    </Paper>

                    {/* <Paper className={classes.pencil}>right</Paper> */}
                </Grid>
            </Grid>
        </div>
    )
}