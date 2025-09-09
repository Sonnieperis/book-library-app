import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="mx-auto max-w-5xl px-4 py-4">
            <h1 className="text-xl font-bold">Book Library</h1>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="mt-12 border-t bg-white">
          <div className="mx-auto max-w-5xl px-4 py-4 text-sm text-gray-500">
            Data from Open Library
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
