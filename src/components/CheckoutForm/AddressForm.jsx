import React, { useState, useEffect } from "react";
import {
   InputLabel,
   Select,
   MenuItem,
   Button,
   Grid,
   Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

import { commerce } from "./../../lib/Commerce";

function AddressForm({ checkoutToken }) {
   // useStates for menu items
   const [shippingCountries, setShippingCountries] = useState([]);
   const [shippingCountry, setShippingCountry] = useState("");
   const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
   const [shippingSubdivision, setShippingSubdivision] = useState("");
   const [shippingOptions, setShippingOptions] = useState([]);
   const [shippingOption, setShippingOption] = useState("");
   const methods = useForm();

   useEffect(() => {
      fetchShippingCountries(checkoutToken.id);
   }, []);

   // Whenever 'shippingCountries' changes, it calls this use effect.
   useEffect(() => {
      if (shippingCountry) fetchSubdivisions(shippingCountry);
   }, [shippingCountry]);

   // Whenever 'shippingSubdivision' changes, it calls this use effect.
   useEffect(() => {
      if (shippingSubdivision)
         fetchShippingOptions(
            checkoutToken.id,
            shippingCountry,
            shippingSubdivision
         );
   }, [shippingSubdivision]);

   // Fetch Countries
   const fetchShippingCountries = async (checkoutTokenId) => {
      const { countries } = await commerce.services.localeListShippingCountries(
         checkoutTokenId
      );
      setShippingCountries(countries);
      setShippingCountry(Object.keys(countries)[0]);
   };

   // Fetch Subdivisions
   const fetchSubdivisions = async (countryCode) => {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
         countryCode
      );
      setShippingSubdivisions(subdivisions);
      setShippingSubdivision(Object.keys(subdivisions)[0]);
   };

   // Fetch Shipping Options
   const fetchShippingOptions = async (
      checkoutTokenId,
      country,
      region = null
   ) => {
      const options = await commerce.checkout.getShippingOptions(
         checkoutTokenId,
         {
            country,
            region,
         }
      );
      setShippingOptions(options);
      setShippingOption(options[0].id);
   };

   // Grabbing Countries
   const countries = Object.entries(shippingCountries).map(([code, name]) => ({
      id: code,
      label: name,
   }));

   // Grabbing Country Subdivisions
   const subdivisions = Object.entries(shippingSubdivisions).map(
      ([code, name]) => ({
         id: code,
         label: name,
      })
   );

   // Grabbing options and setting them.
   const options = shippingOptions.map((option) => ({
      id: option.id,
      label: `${option.description} - (${option.price.formatted_with_symbol})`,
   }));

   return (
      <>
         <Typography variant="h6" gutterBottom>
            Shipping Address
         </Typography>
         <FormProvider {...methods}>
            <form onSubmit="">
               <Grid container spacing={3}>
                  <FormInput name="firstName" label="First Name" />
                  <FormInput name="lastName" label="Last Name" />
                  <FormInput name="address1" label="Address" />
                  <FormInput name="email" label="Email" />
                  <FormInput name="city" label="City" />
                  <FormInput name="zip" label="ZIP / Postal Code" />
                  <Grid item xs={12} sm={6}>
                     <InputLabel>Shipping Country</InputLabel>
                     <Select
                        value={shippingCountry}
                        fullWidth
                        onChange={(e) => setShippingCountry(e.target.value)}
                     >
                        {countries.map((country) => (
                           <MenuItem key={country.id} value={country.id}>
                              {country.label}
                           </MenuItem>
                        ))}
                     </Select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <InputLabel>Shipping Subdivision</InputLabel>
                     <Select
                        value={shippingSubdivision}
                        fullWidth
                        onChange={(e) => setShippingSubdivision(e.target.value)}
                     >
                        {subdivisions.map((subdivision) => (
                           <MenuItem
                              key={subdivision.id}
                              value={subdivision.id}
                           >
                              {subdivision.label}
                           </MenuItem>
                        ))}
                     </Select>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                     <InputLabel>Shipping Options</InputLabel>
                     <Select
                        value={shippingOption}
                        fullWidth
                        onChange={(e) => setShippingOption(e.target.value)}
                     >
                        {options.map((option) => (
                           <MenuItem key={option.id} value={option.id}>
                              {option.label}
                           </MenuItem>
                        ))}
                     </Select>
                  </Grid>
               </Grid>
            </form>
         </FormProvider>
      </>
   );
}

export default AddressForm;
