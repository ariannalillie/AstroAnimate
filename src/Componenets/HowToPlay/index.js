import howToPlay from "../../Media/how-to-play2.png";
import "./HowToPlay.css";
import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import styled from "styled-components";


const StyledButton = styled.button`
  border-radius: 4px;
  padding: 1em 1em 2.5em 1em;
  margin: 0.5em;
  width: ${(props) => (props.buttonType === "reset" ? "7em" : "14em")};
  height: 3.2em;
`;

function HowToPlay() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <StyledButton onClick={handleClickOpen}>How to Play</StyledButton>
            <Dialog
            className="modal-content"
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogContent >
                    <img src={howToPlay} className="how-to-play-image"/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Got it!
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default HowToPlay;
