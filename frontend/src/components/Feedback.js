import { feedbackRoute } from '../ApiRoutes';
import React, { Component } from 'react';
import { post, get } from '../Calls';
import { Button, Grid, IconButton } from '@material-ui/core'
import MoodIcon from '@material-ui/icons/Mood';
import MoodBadIcon from '@material-ui/icons/MoodBad';

export default class Feedback extends Component {
    render() {
        return (
            <div>

                <Grid container spacing={3}>
                    <Grid item xs={3} sm={3}>
                        <IconButton>
                            <MoodIcon denumire="smiley face"></MoodIcon>
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <IconButton>
                            <MoodBadIcon></MoodBadIcon>
                        </IconButton>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Button>Surprised</Button>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Button>Confused</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}