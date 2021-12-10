import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../../Navbar/Navbar"
 import SignUp from "../sign/Signup"
 import SignIn from "../sign/SignIn"
import { Link ,Redirect } from "react-router-dom";
import Dash from "../Dash/Dash"

const useStyles = makeStyles((theme) => ({
  btnContainer:{
  },
  body:{
    overflow:"hidden",
    height:"100vh",
    width:"100vw"
  }
}))
        

export default function Cat( {creadit}) {

  const classes = useStyles();
  const [Tocken,setTocken]  = useState("thisistocken")

  useEffect(() => {

    // setTocken(false)
     // get stored tocken from local storage
     /// if existed ==> get user json
     // else display sign in page
  }, []);

  if(!Tocken){
      return <Redirect to={{ pathname: '/login', state: { from: "HOME"}  }} />
  }
  return (
      <React.Fragment>


    <div className={classes.body}>

       {/* <Navbar
       isHomePage={true}
          isDarkMode={true}
          // draweOpen={draweOpen}
          // toggleDrawer={toggleDrawer}
          draweOpen={()=>console.log("")}
          toggleDrawer={()=>console.log("")}
        /> */}
        <Dash creadit={creadit}/>
    </div>
      </React.Fragment>

  );
}

//clean up to prevent memory leak
//   componentWillUnmount() {
//     window.cancelAnimationFrame(requestID);
//     controls.dispose();
//   }
