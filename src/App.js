import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";

function App() {


	return (
		<Routes>
			<Route path="/" exact element={<Home />} />
			
		</Routes>
	);
};

export default App;

