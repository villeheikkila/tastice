import { useMutation } from '@apollo/react-hooks';
import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import { Clear, HowToReg } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { ACCEPT_FRIENDREQUEST, DELETE_FRIENDREQUEST, FRIENDREQUEST, ME } from '../../queries';
import { errorHandler, notificationHandler } from '../../utils';

interface FriendRequestListItemProps {
    userId: string;
    request: FriendRequestObject;
}

export const FriendRequestListItem = ({ userId, request: { sender, id } }: FriendRequestListItemProps): JSX.Element => {
    const { firstName, lastName } = sender[0];

    const [acceptFriendRequestMutation] = useMutation(ACCEPT_FRIENDREQUEST, {
        onError: errorHandler,
        refetchQueries: [{ query: ME }, { query: FRIENDREQUEST, variables: { id: userId } }],
    });

    const [deleteFriendRequestMutation] = useMutation(DELETE_FRIENDREQUEST, {
        onError: errorHandler,
        refetchQueries: [{ query: ME }, { query: FRIENDREQUEST, variables: { id: userId } }],
    });

    const userIsTheSender = userId === sender[0].id;

    const acceptFriendRequest = async (): Promise<void> => {
        const result = await acceptFriendRequestMutation({
            variables: {
                id,
            },
        });

        if (result) {
            notificationHandler({
                message: `Friend request from ${firstName} ${lastName} accepted`,
                variant: 'success',
            });
        }
    };

    const declineFriendRequest = async (): Promise<void> => {
        const result = await deleteFriendRequestMutation({
            variables: {
                id,
            },
        });

        if (result) {
            if (!userIsTheSender) {
                notificationHandler({
                    message: `Friend request declined for ${firstName} ${lastName}`,
                    variant: 'success',
                });
            } else {
                notificationHandler({
                    message: `Friend request for ${firstName} ${lastName} cancelled`,
                    variant: 'success',
                });
            }
        }
    };

    return (
        <ListItem button alignItems="flex-start" key={id}>
            <ListItemAvatar>
                <Avatar
                    alt={firstName}
                    component={Link}
                    to={`/user/${sender[0].id}`}
                    src="https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2019/03/avatar-publicity_still-h_2019.jpg"
                />
            </ListItemAvatar>
            <ListItemText primary={`${firstName} ${lastName}`} />

            {!userIsTheSender ? (
                <IconButton aria-label="Accept" color="primary" onClick={acceptFriendRequest}>
                    <HowToReg fontSize="large" />
                </IconButton>
            ) : (
                <Typography> Friend request is pending </Typography>
            )}

            <IconButton aria-label="Clear" color="secondary" onClick={declineFriendRequest}>
                <Clear fontSize="large" />
            </IconButton>
        </ListItem>
    );
};
