import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Donations from "./routes/donations";
import Share from "./routes/share";
import Thank from "./routes/thank";
import './index.css';
import RouteWatcher from "./components/RouteWatcher";
import axios from "axios";
import {SnackbarProvider} from "notistack";

axios.defaults.baseURL = 'https://doroga54321.herokuapp.com/api/v1/'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <SnackbarProvider maxSnack={3}>
      <RouteWatcher/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="donations" element={<Donations/>}/>
        <Route path="share" element={<Share/>}/>
        <Route path="thank" element={<Thank/>}/>
      </Routes>
    </SnackbarProvider>
  </BrowserRouter>,
  rootElement
);
