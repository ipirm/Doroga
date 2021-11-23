import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "./App";
import Donations from "./routes/donations";
import Share from "./routes/share";
import Thank from "./routes/thank";
import './index.css';
import RouteWatcher from "./components/RouteWatcher";
import axios from "axios";

axios.defaults.baseURL = ''

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <RouteWatcher />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="donations" element={<Donations />} />
            <Route path="share" element={<Share />} />
            <Route path="thank" element={<Thank />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
