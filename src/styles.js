import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    icon : {
        marginRight: '20px',

    },
    buttons : {
        marginTop: '40px',
    },
    image : {
        height: 0,
        paddingTop: "56.25%",
    },
    expand : {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
    })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    },
    avatar : {
        backgroundColor: 'rgba(0, 100, 200)',
    }

}));

export default useStyles;