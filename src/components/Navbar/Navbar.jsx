import React from "react";
import {
   AppBar,
   Toolbar,
   IconButton,
   Badge,
   MenuItem,
   Menu,
   Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

import Logo from "./../../assets/Logo.svg";

function Navbar() {
   const classes = useStyles();
   return (
      <>
         <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
               <Typography
                  variant="h6"
                  className={classes.title}
                  color="inherit"
               >
                  <img
                     src={Logo}
                     alt="Commerce.js"
                     height="25px"
                     className={classes.image}
                  />
                  Commerce JS
               </Typography>
               <div className={classes.grow}></div>
               <div className={classes.button}>
                  <IconButton aria-label="Show Cart items" color="inherit">
                     <Badge badgeContent={3} color="secondary">
                        <ShoppingCart />
                     </Badge>
                  </IconButton>
               </div>
            </Toolbar>
         </AppBar>
      </>
   );
}

export default Navbar;
