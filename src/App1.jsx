import "./App.css";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Card from "./Card1";

function App() {
  let callMeFromComponent = (data) => {
    alert(`Called from card component ${data}`);
  };

  return ( 
    <>
      <Card myFunction={callMeFromComponent} />
    </>
  );
}

export default App;
