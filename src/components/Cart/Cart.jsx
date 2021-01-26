import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import CartItem from "./CartItem/CartItem";

import useStyle from "./style";

function Cart({ cart }) {
   const classes = useStyle();

   const EmptyCart = () => (
      <Typography variant="subtitle1">
         You have no items in your cart, start adding some!
      </Typography>
   );

   const FilledCart = () => (
      <>
         <Grid container spacing={3}>
            {cart.line_items.map((item) => (
               <Grid item xs={12} sm={4} key={item.id}>
                  <CartItem item={item} />
               </Grid>
            ))}
         </Grid>
         <div className={classes.cardDetails}>
            <Typography variant="h4">
               Subtotal: {cart.subtotal.formatted_with_symbol}
               <div>
                  <Button
                     className={classes.emptyButton}
                     size="large"
                     type="button"
                     variant="contained"
                     color="secondary"
                  >
                     Empty Cart
                  </Button>
                  <Button
                     className={classes.checkout}
                     size="large"
                     type="button"
                     variant="contained"
                     color="primary"
                  >
                     Checkout
                  </Button>
               </div>
            </Typography>
         </div>
      </>
   );

   if (!cart.line_items) return "Loading...";

   return (
      <Container>
         <div className={classes.toolbar} />
         <Typography className={classes.title} variant="h3" gutterBottom>
            Your Shopping Cart
         </Typography>
         {!cart.line_items ? <EmptyCart /> : <FilledCart />}
      </Container>
   );
}

export default Cart;
