import { Button, Card } from "react-bootstrap";

interface Card {
	id: number;
	title: string;
	text: string;
	image: string;
}

interface Props {
	card: Card;
}

const ImageCard = ({ card }: Props) => {
	return (
		<>
			<Card>
				<Card.Img
					variant="top"
					src={card.image}
					alt={`Image of ${card.title}`}
				/>
				<Card.Body>
					<Card.Title>{card.title}</Card.Title>
					<Card.Text>{card.text}</Card.Text>
					<Button variant="primary">Learn More</Button>
				</Card.Body>
			</Card>
		</>
	);
};

export default ImageCard;
