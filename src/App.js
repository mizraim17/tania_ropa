import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container } from "react-bootstrap";

import Article from "./Component/Articles/Article";
import bdArticulos from "./articulos.json";

function App() {
	return (
		<Container>
			<h1 className="title">Venta de ropa Americana</h1>
			<Row>
				{bdArticulos.map((el, i) => {
					return <Article key={i} item={el} />;
				})}
			</Row>
		</Container>
	);
}

export default App;
