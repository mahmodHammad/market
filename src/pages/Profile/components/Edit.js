import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from "@material-ui/core/styles";
import EditForm from "./EditForm"
 
const useStyles = makeStyles(theme => ({

  root: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexFlow:"column",

    position: "fixed",
    top: "calc(50vh - 140px )",
    left: "calc(50% - 200px)"
  },
  box:{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  
  //   bgcolor: 'background.paper',
    background: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,   
},

}));


export default function BasicModal({open,setOpen}) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className={classes.root} >
         
         <EditForm/>
        </Box>
      </Modal>
    </div>
  );
}
