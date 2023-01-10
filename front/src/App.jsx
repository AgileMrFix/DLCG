import './App.css'
import {Outlet} from "react-router-dom";
import {Header} from "./layouts/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header/>
            <main>
                    <Outlet/>
            </main>

        </div>
    )
}

export default App
