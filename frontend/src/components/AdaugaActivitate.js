import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { Grid, TextField, Button } from '@material-ui/core'
import { post, get, put } from '../Calls';
import { activitateRoute } from '../ApiRoutes';
import Moment from 'moment'

export default class AdaugaActivitate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Activitate: {
                DescriereActivitate: "",
                DataActivitate: "",
                DurataActivitate: 0
            }
        };

        this.onChangeActivitate = this.onChangeActivitate.bind(this)
        this.saveActivitate = this.saveActivitate.bind(this)
    }

    onChangeActivitate(e) {
        let newActivitate = this.state.Activitate;
        newActivitate[e.target.name] = e.target.value;
        this.setState({ Activitate: newActivitate });
    }

    async saveActivitate() {
        let id = this.props.match.params.id;

        if (!id) {
            let res = await post(activitateRoute, this.state.Activitate);
            if (res.hasErrors) {
                alert(res.message);
                return;
            }

            this.props.history.push("/ListaActivitati");
        }
        else {
            let res = await put(activitateRoute, id, this.state.Activitate);
            if (res.hasErrors) {
                alert(res.message);
                return;
            }

            this.props.history.push("/ListaActivitati");
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        if (!id)
            return;

        let elem = await get(activitateRoute, id);
        if (elem.hasErrors) {
            alert(elem.message);
            return;
        }

        this.setState({ Activitate: elem })
    }

    render() {
        return (
            <div>

                <Grid container spacing={3}>
                    <Grid item xs={4} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="DescriereActivitate"
                            name="DescriereActivitate"
                            label="Descriere Activitate"
                            fullWidth
                            value={this.state.Activitate.DescriereActivitate}
                            onChange={e => this.onChangeActivitate(e)}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="DataActivitate"
                            name="DataActivitate"
                            label="Data Activitate"
                            fullWidth
                            value={Moment.utc(this.state.Activitate.DataActivitate).format("YYYY-MM-DD HH:mm")}
                            onChange={e => this.onChangeActivitate(e)}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="DurataActivitate"
                            name="DurataActivitate"
                            label="Durata Activitate"
                            fullWidth
                            value={this.state.Activitate.DurataActivitate}
                            onChange={e => this.onChangeActivitate(e)}
                        />
                    </Grid>
                </Grid>

                <div class="centeredup">
                <Button color="primary" variant="outlined" startIcon={<CancelIcon />} onClick={
                    (() => { this.props.history.push("/ListaActivitati") })
                }>
                    Cancel
                </Button>
                <Button onClick={this.saveActivitate} color="primary" variant="outlined" startIcon={<SaveIcon />}>
                    Save
                </Button>
                </div>
            </div>
        )

    }
}