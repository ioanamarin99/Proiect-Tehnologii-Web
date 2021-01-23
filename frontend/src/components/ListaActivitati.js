import { get, remove } from "../Calls";
import React, { Component } from 'react';
import { activitateRoute } from '../ApiRoutes'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Button, Paper, Table, TableBody, TableCell, TableRow, TableContainer, TableHead, IconButton } from '@material-ui/core'
import Moment from 'moment';

export default class ListaActivitati extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: []
        };

        this.deleteActivitate = this.deleteActivitate.bind(this);
    }

    async componentDidMount() {
        let data = await get(activitateRoute);
        if (data.hasErrors) {
            alert(data.message)
            return;
        }
        this.setState({ rows: data })
    }

    async deleteActivitate(id, index) {
        let res = await remove(activitateRoute, id);

        if (res.hasErrors) {
            alert(res.message);
            return;
        }

        let activitati = this.state.rows;
        activitati.splice(index, 1);
        this.setState({ rows: activitati });
    }

    render() {
        return (
            <div>

                <div class="centeredup">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => {
                            this.props.history.push("/AdaugaActivitate")
                        }}
                    >
                        Adauga o noua activitate
          </Button>
                </div>
                <br />

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Cod activitate</TableCell>
                                <TableCell align="right">Descriere activitate</TableCell>
                                <TableCell align="right">Data activitate</TableCell>
                                <TableCell align="right">Durata activitate(min)</TableCell>
                                <TableCell align="right">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows.map((row, index) => (
                                <TableRow key={row.IdActivitate}>
                                    <TableCell component="th" scope="row">
                                        {row.IdActivitate}
                                    </TableCell>
                                    <TableCell align="right">{row.DescriereActivitate}</TableCell>
                                    <TableCell align="right">{Moment.utc(row.DataActivitate).format("YYYY-MM-DD HH:mm")}</TableCell>
                                    <TableCell align="right">{row.DurataActivitate}</TableCell>
                                    <TableCell align="right">
                                        <IconButton>
                                            <EditIcon color="primary" onClick={(() => { this.props.history.push(`/AdaugaActivitate/${row.IdActivitate}`) })} />
                                        </IconButton>
                                        <IconButton onClick={() => this.deleteActivitate(row.IdActivitate, index)}>
                                            <DeleteIcon color="secondary" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}