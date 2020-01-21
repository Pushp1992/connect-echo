import React from 'react';
import MUIDataTable from "mui-datatables";
import { NavBar } from '../navBar/navBar';
import jobDetails from '../../utils/jobData';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './jobList.scss';

const useStyles = makeStyles({
    card: {
        maxWidth: 845,
    },
    media: {
        height: 80,
    }
});

export default function JobList() {
    const classes = useStyles();

    const getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableBodyRow: {
                root: {
                    backgroundColor: "white"
                }
            }
        }
    })

    function showRow(rowData, rowMeta) {
        console.log(rowData, "\n", rowMeta);
        return (
            <tr>
                <td></td>
                <td></td>
                <Card className={classes.card}>
                    <CardActionArea  style={{backgroundColor: "whitesmoke"}}>
                        <CardMedia
                            className={classes.media}
                            image="/image"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {rowData[0]}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {rowData[1]}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {rowData[2]}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button variant="contained" size="small" color="primary">
                            Apply
                        </Button>
                    </CardActions>
                </Card>
            </tr>
        )
    }

    const columns = [
        { name: "CompanyName", label: "Company Name" },
        { name: "Designation", label: "Designation" },
        { name: "DatePosted", label: "Date Posted" },
        { name: "details", label: "Details" }
    ];

    const data = jobDetails;
    const options = {
        expandableRows: true,
        showResponsive: true,
        expandableRowsOnClick: true,
        renderExpandableRow: showRow
    };

    return (
        <div>
            <NavBar />
            <MuiThemeProvider theme={getMuiTheme()}>
                <MUIDataTable title={"Job List"} data={data} columns={columns} options={options} />
            </MuiThemeProvider>
        </div>
    )
}