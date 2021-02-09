import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import "./SimplePopper.css"

const useStyles = makeStyles((theme) => ({
  paper: {
    border: "none",
    padding: theme.spacing(1),
    backgroundColor: "white",
    borderRadius: "5px",
  },
}));

export default function SimplePopper({name, message}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
      <div>
        <button className="popper" aria-describedby={id} type="button" onClick={handleClick}>
          {name}
        </button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <div className={classes.paper}>{message}</div>
        </Popper>
      </div>
    );
  }
