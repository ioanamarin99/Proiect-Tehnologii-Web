import { get } from "../Calls";
import React, { Component } from 'react';
import { activitateRoute } from '../ApiRoutes'
import { Paper, Table, TableBody, TableCell, TableRow, TableContainer, TableHead, IconButton } from '@material-ui/core'
import Moment from 'moment';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

export default class ListaActivitati extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: []
        };
    }

    async componentDidMount() {
        let data = await get(activitateRoute);
        if (data.hasErrors) {
            alert(data.message)
            return;
        }
        this.setState({ rows: data })
    }

    render() {
        return (
            <div>

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
                                            <PersonAddIcon color="primary" onClick={(() => { this.props.history.push("/Feedback") })} />
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