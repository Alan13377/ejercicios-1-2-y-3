import "./App.css";
import TaskList from "./components/containers/taskList";
import ContactList from "./components/containers/contactList";

function App() {
  return (
    <div className="App">
      <TaskList />
      <ContactList></ContactList>
    </div>
  );
}

export default App;
