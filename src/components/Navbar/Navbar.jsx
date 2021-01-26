import React from "react";
import { Link, useLocation } from "react-router-dom";
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

function Navbar({ totalItems }) {
   const classes = useStyles();
   const location = useLocation();

   return (
      <>
         <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
               <Typography
                  component={Link}
                  to="/"
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
               {location.pathname === "/" && (
                  <div className={classes.button}>
                     <IconButton
                        component={Link}
                        to="/cart"
                        aria-label="Show Cart items"
                        color="inherit"
                     >
                        <Badge badgeContent={totalItems} color="secondary">
                           <ShoppingCart />
                        </Badge>
                     </IconButton>
                  </div>
               )}
            </Toolbar>
         </AppBar>
      </>
   );
}

export default Navbar;
