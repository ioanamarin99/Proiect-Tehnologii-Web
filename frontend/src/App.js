import logo from './logo.svg';
import './App.css';
import ListaActivitati from './components/ListaActivitati';
import AdaugaActivitate from './components/AdaugaActivitate';
import Login from './components/Login';
import ListaActivitatiStudent from './components/ListaActivitatiStudent';
import Feedback from './components/Feedback';
import InregistrareUtilizator from './components/InregistrareUtilizator';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = "/" exact strict component={Login}/>
          <Route path = "/ListaActivitati" exact strict component={ListaActivitati}/>
          <Route path = "/AdaugaActivitate/:id?" exact strict component={AdaugaActivitate}/>
          <Route path = "/ListaActivitatiStudent" exact strict component={ListaActivitatiStudent}/>
          <Route path = "/Feedback" exact strict component={Feedback}/>
          <Route path = "/InregistrareUtilizator" exact stric component={InregistrareUtilizator}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
