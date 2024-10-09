import ToggleText from "./components/ToggleText";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div >
          <Header></Header>
          <ToggleText></ToggleText>
        </div>
      </div>
    </>
  );
}

export default App;
