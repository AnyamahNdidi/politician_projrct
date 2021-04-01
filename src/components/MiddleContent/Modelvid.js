import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CancelIcon from '@material-ui/icons/Cancel';
import "./Videostyle.css"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Modelvid({ title, decs, vid, id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button type="button" style={{ background: "grey", width: "300px", border: "none", height: "60px", color: "white", fontWeight: "600" }} onClick={handleOpen}>
        {title}
      </button>
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
            <div
              onClick={handleClose}
              className="container_model">
              <div className="container2_model">
                <div className="container_tile">
                  <div style={{ display: "flex", justifyContent: "center", alignContent: "center", width: "1000px" }}>
                    {title}
                  </div>
                  <div>
                    <CancelIcon onClick={handleClose} />
                  </div>


                </div>
                <div className="video_container">

                  <div className="con_vid">
                    <video type='video/mp4' controls src={vid} />
                  </div>

                  <div className="decs_con">
                    {decs}
                  </div>




                </div>

              </div>
            </div>

          </div>
        </Fade>
      </Modal>
    </div>
  );
}
