import React from 'react';
import { Link, Typography } from '@material-ui/core'

import AppLayout from '../shared/AppLayout';
import history from '../history';

const HomePage = (props) => {
    const here = ' here '
    return (
        <AppLayout title="Home Page">
            <div className="home-page">
                <Typography variant="h6">
                    Welcome User! You can check projects from
                    <Link href="#" onClick={() => {
                        history.push('/projects');
                    }}>
                        {here}
                    </Link>
                     or by using the menu above
                </Typography>
            </div>
        </AppLayout>
    )
}

export default HomePage;
