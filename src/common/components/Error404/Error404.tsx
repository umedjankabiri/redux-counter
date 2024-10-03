import stl from "common/components/Error404/Error404.module.css"

export const Error404 = () => {
    const originalPath = window.location.pathname

    return (
        <div className={stl.error404}>
            <h1>ERROR 404</h1>
            <span>The requested URL: <span className={stl.path}>{originalPath}</span> was not found on this server.</span>
        </div>
    )
}
