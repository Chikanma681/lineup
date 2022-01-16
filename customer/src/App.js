import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Line from "./pages/linepage";
import Home from "./pages/home";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/line/:id">
					<Line />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
