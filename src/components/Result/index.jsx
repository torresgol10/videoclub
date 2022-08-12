import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Ratio from 'react-bootstrap/Ratio';
import "./style.css"
import CustomModalPortal from 'components/CustomModal';

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Result({ movies = [] }) {
    const [id, setId] = useState(null);
    const handleShow = ({ id }) => {
        setId(id);
    }

    return (
        <Container fluid>
            <Row>
                {movies.map(movie =>
                    <Col lg={2} key={movie.id} style={{ marginBottom: "1rem" }}>
                        <Card onClick={() => handleShow({ id: movie.id })}>
                            <Ratio aspectRatio="16x9">
                                <Card.Img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt={movie.title} style={{ objectFit: "cover", borderRadius: 0 }} />
                            </Ratio>
                        </Card>
                    </Col>
                )}
            </Row>
            {id !== null &&
                <CustomModalPortal id={id} handlerId={setId} />}
        </Container>

    )
}


