import 'App/App.module.css'
import stl from "App/App.module.css"
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Settings} from "features/ui/Settings/Settings.tsx";
import {Counter} from "features/ui/Counter/Counter.tsx";
import {Error404} from "common/components/Error404/Error404.tsx";
import {PATH} from "common/utils/path.ts";

function App() {

    return (
        <div className={stl.mainWrapper}>
            <div className={stl.navigation}>
                <div>
                    <NavLink className={({isActive}) =>
                        isActive ? stl.activeLink : stl.link} to={PATH.SETTINGS}
                    >SETTINGS</NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) =>
                        isActive ? stl.activeLink : stl.link} to={PATH.COUNTER}
                    >COUNTER</NavLink>
                </div>
            </div>
            <Routes>
                <Route path={"/"} element={<Navigate to={PATH.SETTINGS}/>}/>
                <Route path={PATH.SETTINGS} element={<Settings/>}/>
                <Route path={PATH.COUNTER} element={<Counter/>}/>
                <Route path={PATH.ERROR404} element={<Error404/>}/>
                <Route path={"/*"} element={<Error404/>}/>
            </Routes>
        </div>
    )
}

export default App
