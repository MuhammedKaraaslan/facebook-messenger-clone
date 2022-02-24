import React, { forwardRef } from 'react'

import './Message.css'

import { Card, CardContent, Typography } from '@material-ui/core';

const Message = forwardRef(({ message, username }, ref) => {

    const isUser = username === message.username; // Return true if the one who send message is the one who is the current user otherwise return false

    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography
                        color='textSecondary'
                        variant='h5'
                        component='h2'
                    >
                        {!isUser && `${message.username || 'Unknown user'} :`}{message.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
)
export default Message 