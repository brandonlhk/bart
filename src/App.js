import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react"
import Home from "./pages/Home.jsx"
import Experiment from "./pages/Test.jsx"

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiment" element={<Experiment />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
