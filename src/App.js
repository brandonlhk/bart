import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ChakraProvider} from "@chakra-ui/react"
import Home from "./pages/Home.jsx"
import Tutorial from "./pages/Tutorial.jsx"
import Experiment from "./pages/Test.jsx"
import Summary from "./pages/Summary.jsx"

export default function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/experiment" element={<Experiment />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
