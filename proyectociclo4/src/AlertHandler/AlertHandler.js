import React, { useEffect }  from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertHandler = ({ description='', event='success', action, show, vertical= 'center', horizontal= 'center', eventTime=3000 }) => {

  useEffect(() => {
    setOpen(show)
  }, [])

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={eventTime} onClose={action} anchorOrigin={{ vertical, horizontal }}>
        <Alert onClose={action} severity={event}>
          {description}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default AlertHandler;
