import stl from "common/components/Error404/Error404.module.css"

export const Error404 = () => {

    return (
        <div className={stl.error404}>
            <h1>ERROR <span style={{color: "red"}}>404</span></h1>
            <p>The requested URL:{" "}
                <span className={stl.path}>{window.location.pathname}</span>{" "}
                was not found on this server.</p>
        </div>
    )
}
