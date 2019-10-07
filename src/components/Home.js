import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

const Home = (props) => {

    let name;
    let topic;

    const handleSubmit = (e) => {
        e.preventDefault();
        let teacherName = name.value;
        let teacherTopic = topic.value;
        let path = `/teachers/${teacherTopic}/${teacherName}`;

        props.history.push(path);
    };

    return (
        <div>
            <span>Home</span>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Control placeholder="First name" ref={ (input) => name = input} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Topic" ref={ (input) => topic = input} />
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Home;