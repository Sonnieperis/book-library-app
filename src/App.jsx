import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<Route path="/book/:id" element={<BookDetails />} />


// Pages
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-orange-900 text-white">
      <Router>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
