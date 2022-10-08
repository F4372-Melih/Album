import Card from "react-bootstrap/Card";
function Picture({ name, src }) {
  return (
    <Card ms={1}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
export default Picture;
