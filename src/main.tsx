import {createRoot} from 'react-dom/client'
import './index.css'
import App from "App/App.tsx";
import {Provider} from "react-redux";
import {store} from "App/store.ts";
import {BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)
