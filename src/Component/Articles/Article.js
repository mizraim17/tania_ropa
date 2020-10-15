import React from "react";
import { Card, Col } from "react-bootstrap";

const Article = ({ item }) => {
	return (
		<Col md={6} lg={4} sm={12}>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={item.Urlimage} />
				{console.log("precio", item.Precio)}
				<Card.Body>
					<Card.Title>{item.Nombre}</Card.Title>
					<Card.Text>{item.Descripcion}</Card.Text>
					<p>{`$${item.Precio}`} </p>
					{/* <Button variant="primary">Go somewhere</Button> */}
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Article;
