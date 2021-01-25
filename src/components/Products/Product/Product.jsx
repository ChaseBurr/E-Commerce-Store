import React from "react";
import {
   Card,
   CardMedia,
   CardContent,
   CardActions,
   Typography,
   IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

function Product({ product }) {
   const classes = useStyles();
   return (
      <Card className={classes.root}>
         <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
         />
         <CardContent>
            <div className={classes.cardContent}>
               <Typography variant="h5" gutterButton>
                  {product.name}
               </Typography>
               <Typography variant="h5">{product.price}</Typography>
            </div>
            <Typography variant="body2" color="textSecond">
               {product.description}
            </Typography>
         </CardContent>
         <CardActions disableSpacing className={classes.cardActions}>
            <IconButton area-label="Add to Card">
               <AddShoppingCart />
            </IconButton>
         </CardActions>
      </Card>
   );
}

export default Product;
