import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import EntityDetails from "./pages/EntityDetails/EntityDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/entity-details" element={<EntityDetails />} />
        <Route
          path="*"
          element={
            <div className="d-flex flex-column justify-content-center align-items-center vh-100">
              This page cannot be found.
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
