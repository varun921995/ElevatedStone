import { Card } from "react-bootstrap";

interface Card {
	id: number;
	title: string;
	text: string;
	description: string;
	image: string;
}

interface Props {
	card: Card;
}

const ImageCard = ({ card }: Props) => {
	return (
		<>
			<Card style={{ height: "100%" }}>
				<Card.Img
					variant="top"
					src={card.image}
					alt={`Image of ${card.title}`}
				/>
				<Card.Body>
					<Card.Title>{card.title}</Card.Title>
					<Card.Text>{card.text}</Card.Text>
					<Card.Text className="our-services-text normal">
						{card.description}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	);
};

export default ImageCard;
