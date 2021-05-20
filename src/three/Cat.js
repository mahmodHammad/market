import React, { useState, useEffect, useRef } from "react";
import { sceneSetup, scene ,controls} from "./setup";
import { startAnimationLoop ,requestID} from "./Animate";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btnContainer:{
    display:"flex",
    justifyContent:"center",
    position:"relative",
    top:"90vh",
    // background:"#666"
    // left:"40%"
  },
  btn:{
  
  }
}))


             

export default function Cat( ) {
  const classes = useStyles();
  const textInput = useRef(null);

  useEffect(() => {

      scene.clear()
      const canvasTarget = textInput.current;
      sceneSetup(canvasTarget);
      startAnimationLoop();
    
    return () => {
      // Anything in here is fired on component unmount.
      window.cancelAnimationFrame(requestID);
          controls.dispose();
  }
  }, []);

  return (
    <React.Fragment>
          <div className={classes.btnContainer}>
               <Button
                  className={classes.DeleteBtn}
                  size="small"
                  color="primary"
                  variant="contained"
                  component={Link}
                  to={{
                    pathname: "/shop",
                    state: {
                      scrollTo: "shop"
                    }
                 }}
                  >
                  Discover Now
                  </Button>   
                  
        </div>
      <div ref={textInput} className="canvas"></div>

  
    </React.Fragment>
  );
}

//clean up to prevent memory leak
//   componentWillUnmount() {
//     window.cancelAnimationFrame(requestID);
//     controls.dispose();
//   }
