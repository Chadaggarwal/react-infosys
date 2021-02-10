import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: '10px',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        minWidth: '500px',
    },
}));

export default function ModalTest() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = React.useState(0);


    const handleOpen = () => {
        setOpen(true);
        setCount(count + 1)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div className={classes.root} >
            <Grid container md={8} spacing={2}>
                <Grid item md={2}>
                    <Button variant="contained" onClick={handleOpen}>
                        Open Modal
                </Button>
                </Grid>
                <Grid item md={2}>
                    <Button variant="contained" onClick={resetCount}>
                        Reset Count
                </Button>
                </Grid>
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>React Modal</h2>
                        <p>Modal has been clicked {count} times</p>
                        <Button variant="contained" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </Fade>

            </Modal>
        </div>
    );
}