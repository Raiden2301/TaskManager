import React from 'react';
import { Grid, Typography, Link, Container } from '@material-ui/core';

import './Layout.css'

const Footer = () => {
    return (
        <footer className="footerStyle">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
        </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Something here to give the footer a purpose!
        </Typography>
            {/* <Copyright /> */}
        </footer>
        // <div className="footerStyle">
        //     <Grid container spacing={3}>
        //         <Grid item xs={3}>
        //             <Typography>
        //                 <Link href="#" >
        //                     Link
        //                 </Link>
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={3}>
        //             <Typography>
        //                 <Link href="#" >
        //                     Link
        //                 </Link>
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={3}>
        //             <Typography>
        //                 <Link href="#" >
        //                     Link
        //                 </Link>
        //             </Typography>
        //         </Grid>
        //         <Grid item xs={3}>
        //             <Typography>
        //                 <Link href="#" >
        //                     Link
        //                 </Link>
        //             </Typography>
        //         </Grid >
        //     </Grid >

        // </div >
    )
}

export default Footer;
