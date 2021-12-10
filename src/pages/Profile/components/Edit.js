import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from "@material-ui/core/styles";
import EditForm from "./EditForm"
import Deposit from "./Deposit"

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

}));


export default function BasicModal({product,open,setOpen,isCreate,onSubmit,isDeposit,onDeposit}) {
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
      {isDeposit?<Deposit setOpen={setOpen} onSubmit={onDeposit}/>: <EditForm setOpen={setOpen} product={product} isCreate={isCreate} onSubmit={onSubmit} />}
              
        </Box>
      </Modal>
    </div>
  );
}
