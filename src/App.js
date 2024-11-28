import { Routes, Route } from "react-router-dom";
import { SharedDataProvider } from "./contexts/SharedDataContext";
import Home from "./pages/HomePage/HomePage";
import EntityDetails from "./pages/EntityDetailsPage/EntityDetailsPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <SharedDataProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/entity-details" element={<EntityDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </SharedDataProvider>
  );
}

export default App;
