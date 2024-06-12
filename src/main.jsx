import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import NavbarProvider from "./Context/NavbarProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<NavbarProvider>
			<App />
		</NavbarProvider>
	</React.StrictMode>
);
