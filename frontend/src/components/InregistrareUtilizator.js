import React, { Component } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { Grid, TextField, Button } from '@material-ui/core'
import { post, get} from '../Calls';
import { utilizatorRoute } from '../ApiRoutes';

export default class InregistrareUtilizator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Utilizator: {
                ParolaUser: "",
                NumeUser: "",
                TipUser: ""
            }
        };

        this.onChangeUtilizator = this.onChangeUtilizator.bind(this)
        this.saveUtilizator = this.saveUtilizator.bind(this)
    }

    onChangeUtilizator(e) {
        let newUtilizator = this.state.Utilizator;
        newUtilizator[e.target.name] = e.target.value;
        this.setState({ Utilizator: newUtilizator });
    }

    async saveUtilizator() {
        let id = this.props.match.params.id;

        if (!id) {
            let res = await post(utilizatorRoute, this.state.Utilizator);
            if (res.hasErrors) {
                alert(res.message);
                return;
            }

            this.props.history.push("/");
        }
    }

    async componentDidMount() {
        let id = this.props.match.params.id;
        if (!id)
            return;

        let elem = await get(utilizatorRoute, id);
        if (elem.hasErrors) {
            alert(elem.message);
            return;
        }

        this.setState({ Utilizator: elem })
    }

    render() {
        return (
            <div>

                <Grid container spacing={3}>
                    <Grid item xs={4} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="ParolaUser"
                            name="ParolaUser"
                            label="Parola User"
                            fullWidth
                            value={this.state.Utilizator.ParolaUser}
                            onChange={e => this.onChangeUtilizator(e)}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="NumeUser"
                            name="NumeUser"
                            label="Nume User"
                            fullWidth
                            value={this.state.Utilizator.NumeUser}
                            onChange={e => this.onChangeUtilizator(e)}
                        />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="TipUser"
                            name="TipUser"
                            label="Tip User (student/profesor)"
                            fullWidth
                            value={this.state.Utilizator.TipUser}
                            onChange={e => this.onChangeUtilizator(e)}
                        />
                    </Grid>
                </Grid>

                <div class="centeredup">
                <Button color="primary" variant="outlined" startIcon={<CancelIcon />} onClick={
                    (() => { this.props.history.push("/") })
                }>
                    Cancel
                </Button>
                <Button onClick={this.saveUtilizator} color="primary" variant="outlined" startIcon={<SaveIcon />}>
                    Save
                </Button>
                </div>
            </div>
        )

    }
}