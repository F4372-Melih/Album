import Picture from "./components/Picture";
import data from "./helper/data.js";
import Col from "react-bootstrap/Col";

function Images() {
  return data.map((person, i) => (
    <Col lg={4} md={6}>
      <Picture key={i} name={person.photographer} src={person.src.large} />
    </Col>
  ));
}

export default Images;
