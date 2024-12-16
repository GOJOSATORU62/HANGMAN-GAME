import { Route, Routes } from "react-router-dom";
// import TextInputFormContainer from "./components/TextInputForm/TextInputFormContainer";
import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";

function App() {
  return (
    // <div>
    //   <h1 className="text-3xl font-semibold">Welcome to Hangman</h1>
    //   <TextInputFormContainer
    //     onSubmit={(value) =>
    //       console.log("Value coming from the hidden from is ", value)
    //     }
    //   />
    // </div>

    <>
      <div>Navbar</div>

      <Routes>
        <Route path="/play" element={<PlayGame />} />
        <Route path="/start" element={<StartGame />} />
        <Route
          path="*"
          element={<h1>Page Not Found This fucking got me bitch</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
