import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

// Components
import Product from "./Product/Product";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ products }) => {
   const classes = useStyles();
   return (
      <main className={classes.content}>
         <div className={classes.toolbar} />
         <Grid container justify="center" spacing={4}>
            {products.map((product) => (
               <Grid key={product.key} item xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
               </Grid>
            ))}
         </Grid>
      </main>
   );
};
