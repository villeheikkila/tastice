import { useQuery } from '@apollo/react-hooks';
import { Snackbar } from '@material-ui/core';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { GET_NOTIFICATION } from '../../graphql';
import { NotificationContentWrapper } from './NotificationContentWrapper';

export const Notifications = (): JSX.Element | null => {
    const [open, setOpen] = useState(true);
    const { data, client } = useQuery(GET_NOTIFICATION);

    useEffect((): void => {
        if (data && data.notification) setOpen(true);
    }, [data]);

    if (
        data === undefined ||
        data.notification === undefined ||
        data.notification === '' ||
        data.variant === undefined
    ) {
        return null;
    }

    const handleCloseNotification = (event?: SyntheticEvent, reason?: string): void => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);

        client.writeData({
            data: {
                notification: '',
                variant: 'success',
            },
        });
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={open}
            autoHideDuration={1500}
            onClose={handleCloseNotification}
        >
            <NotificationContentWrapper
                onClose={handleCloseNotification}
                variant={data.variant as any}
                message={data.notification}
            />
        </Snackbar>
    );
};