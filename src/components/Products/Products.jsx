import React from "react";
import { Grid } from "@material-ui/core";

import useStyles from "./styles";

// Components
import Product from "./Product/Product";

const products = [
   {
      id: 1,
      name: "Shoes",
      description: "Running Shoes",
      price: "$5",
      image:
         "https://s2.r29static.com/bin/entry/ebd/0,675,2000,1050/x,80/1929471/image.jpg",
   },
   {
      id: 1,
      name: "Macbook",
      description: "Apple Macbook",
      price: "$10",
      image:
         "https://www.bhphotovideo.com/images/images2500x2500/apple_z0x1_mvfh_05_bh_13_3_macbook_air_with_1492907.jpg",
   },
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
   const classes = useStyles();
   return (
      <main className={classes.content}>
         <div className={classes.toolbar} />
         <Grid container justify="center" spacing={4}>
            {products.map((product) => (
               <Grid item key={product.key} xs={12} sm={6} md={4} lg={3}>
                  <Product product={product} />
               </Grid>
            ))}
         </Grid>
      </main>
   );
};
