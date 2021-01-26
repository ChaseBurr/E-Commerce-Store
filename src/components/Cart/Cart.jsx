import React from "react";
import { Link } from "react-router-dom";

// Material-UI
import { Container, Typography, Button, Grid } from "@material-ui/core";

// Components
import CartItem from "./CartItem/CartItem";

// Styling
import useStyle from "./style";

// Cart Component to display every item the user added to their cart.
function Cart({
   cart,
   handleUpdateCardQty,
   handleRemoveFromCart,
   handleEmptyCart,
}) {
   // assigning styling to variable
   const classes = useStyle();

   // Generate empty cart
   const EmptyCart = () => (
      <Typography variant="subtitle1">
         You have no items in your cart,
         <Link to="/" className={classes.link}>
            start adding some
         </Link>
         !
      </Typography>
   );

   // Generate cart with all the user added items
   const FilledCart = () => (
      <>
         <Grid container spacing={3}>
            {cart.line_items.map((item) => (
               <Grid item xs={12} sm={4} key={item.id}>
                  <CartItem
                     item={item}
                     handleUpdateCardQty={handleUpdateCardQty}
                     handleRemoveFromCart={handleRemoveFromCart}
                  />
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
                     onClick={handleEmptyCart}
                  >
                     Empty Cart
                  </Button>
                  <Button
                     className={classes.checkout}
                     size="large"
                     type="button"
                     variant="contained"
                     color="primary"
                     component={Link}
                     to="/checkout"
                  >
                     Checkout
                  </Button>
               </div>
            </Typography>
         </div>
      </>
   );

   // wait for page to grab cart items
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
