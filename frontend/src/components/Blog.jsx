import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function Blogs() {
  return (
    <Row xs={1} md={2} className="g-4 m-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img
              variant="top"
              height={160}
              src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text className="text-muted">
                Posted on July 20, 2022 by{" "}
                <span className="fw-bold">Samir Hossain</span>
              </Card.Text>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.{" "}
                <span
                  className="text-primary fw-bold"
                  style={{ cursor: "pointer" }}
                >
                  Read more
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Blogs;
