import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Dashboard from "./components/Dashboard.jsx";
import SignupForm from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" component={Dashboard} />
          <Route path="/signup" exact component={SignupForm} />
          <Route path="/login" exact component={Login} />
        </Routes>
        <Navigate to="/" />
      </Router>
    </div>
  );
}

export default App;
