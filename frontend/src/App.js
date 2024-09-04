import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import WeatherPage from "./pages/WeatherPage";
import ActivitiesPage from "./pages//ActivitiesPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<WeatherPage />} />
          <Route path="activitiespage" element={<ActivitiesPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;