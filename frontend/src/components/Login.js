import React, { Component } from 'react';
import { utilizatorRoute } from '../ApiRoutes'
import { Button } from '@material-ui/core'

export default class Login extends Component {
    render() {
        return (
            <div class="centered">
                <div>
                    <Button style={{
                        width: "400px",
                        height: "60px",
                        minWidth: "200px",
                        display: "block"
                    }}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            this.props.history.push("/ListaActivitati")
                        }}
                    >
                        Login ca profesor
                    </Button>
                </div>

                <div> <ul></ul> </div>

                <div>
                    <Button style={{
                        width: "400px",
                        height: "60px",
                        minWidth: "200px",
                        display: "block"
                    }}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            this.props.history.push("/ListaActivitatiStudent")
                        }}
                    >
                        Login ca student
                    </Button>
                </div>

                <div> <ul></ul> </div>

                <div>
                    <Button style={{
                        width: "400px",
                        height: "60px",
                        minWidth: "200px",
                        display: "block"
                    }}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            this.props.history.push("/InregistrareUtilizator")
                        }}
                    >
                        Inregistrare utilizator
                    </Button>
                </div>
            </div>
        )
    }
}