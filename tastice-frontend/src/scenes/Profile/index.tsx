import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { USER } from '../../queries';
import { CheckInCard } from '../../components/CheckInCard';
import { Divider } from '../../components/Divider';

import { Paper, Avatar, Typography, Theme, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            marginTop: 30,
            maxWidth: 700,
            padding: theme.spacing(1, 1),
            margin: `${theme.spacing(1)}px auto`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignContent: 'center',
        },
        avatar: {
            marginLeft: 30,
            marginRight: 30,
            marginTop: 15,
            marginBottom: 15,
            width: 150,
            height: 150,
        },
        textField: {
            marginTop: 10,
        },
        button: {
            marginTop: 30,
        },
        root: {
            alignItems: 'center',
        },
    }),
);

export const Profile = (id: any): JSX.Element | null => {
    const classes = useStyles();
    const user = useQuery(USER, {
        variables: { id: id.id },
    });

    if (user.data.user === undefined) {
        return null;
    }

    const userObject = {
        firstName: user.data.user[0].firstName,
        lastName: user.data.user[0].lastName,
        checkins: user.data.user[0].checkins,
    };

    const dividerText = userObject.checkins.length === 0 ? 'No Recent Activity' : 'Recent Activity';

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Typography variant="h4" component="h3" className={classes.textField}>
                    {userObject.firstName} {userObject.lastName}
                </Typography>
                <Avatar
                    alt="Avatar"
                    src="https://pixel.nymag.com/imgs/daily/vulture/2018/11/02/02-avatar-2.w700.h467.jpg"
                    className={classes.avatar}
                />
                <Typography variant="h4" component="h3" className={classes.textField}>
                    Checkins in total: {userObject.checkins.length}
                </Typography>
            </Paper>

            <Divider text={dividerText} />

            {userObject.checkins.map((checkin: any) => (
                <CheckInCard key={checkin.createdAt} checkin={checkin} showProduct={true} />
            ))}
        </div>
    );
};
