import 'App/App.css'
import {Settings} from "features/ui/Settings/Settings.tsx";
import {Counter} from "features/ui/Counter/Counter.tsx";

function App() {

  return (
      <>
        <h1>Start redux counter project</h1>
          <Settings/>
          <Counter/>
      </>
  )
}

export default App
