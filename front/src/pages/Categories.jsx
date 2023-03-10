import {useEffect, useState} from "react";
import {Col, Container, Row, ListGroup, Button} from "react-bootstrap";
import {CategoryService} from "../services/CategoryService.js";
import {Branch} from "../components/Node/Branch.jsx";
import {Link} from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const getCategories = () => {
    setLoading(true);
    CategoryService.getCategoriesTree()
      .then(({data}) => {
        setCategories(data.data)
      }).catch().finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h3>Products by category</h3>
        </Col>
      </Row>
      <Row>
        {loading &&
        <div >Loading...</div>
        }
        <Col md="auto">
          <Container>
            <ListGroup>{categories.map(Branch)}</ListGroup>
          </Container>
        </Col>
      </Row>

    </Container>
  )
}
