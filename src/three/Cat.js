import React, { useState, useEffect, useRef } from "react";
import { sceneSetup, scene ,controls} from "./setup";
import { startAnimationLoop ,requestID} from "./Animate";

export default function Cat( ) {
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
      <div ref={textInput} className="canvas"></div>
    </React.Fragment>
  );
}

//clean up to prevent memory leak
//   componentWillUnmount() {
//     window.cancelAnimationFrame(requestID);
//     controls.dispose();
//   }
