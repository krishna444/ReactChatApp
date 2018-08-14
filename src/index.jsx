import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from "./components/App";
import { Button, Tooltip } from 'reactstrap';

import registerServiceWorker from './registerServiceWorker';
const Index = () => { return <div id="tt"><Tooltip target="tt"> Test</Tooltip></div> }

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Index />, document.getElementById("test"));
ReactDOM.render(<Button color="danger">Danger</Button>, document.getElementById("test1"));

registerServiceWorker();
