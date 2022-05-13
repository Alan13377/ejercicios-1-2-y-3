import "./App.css";
import TaskList from "./components/containers/taskList";
import ContactList from "./components/containers/contactList";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      <TaskList />
      {/* <ContactList></ContactList> */}
      {/**Ejemplo de uso de hooks */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2 /> */}
      <MiComponenteConContexto />
      <Ejemplo4 name="Alan">
        {/**Todo lo de aqui, es tratado como props.children  */}
        <h3>Este contenido del children </h3>
      </Ejemplo4>
    </div>
  );
}

export default App;
