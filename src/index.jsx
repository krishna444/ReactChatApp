import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from "./components/App";
import { Button, Tooltip } from 'reactstrap';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />,document.getElementById("root"));
registerServiceWorker();
