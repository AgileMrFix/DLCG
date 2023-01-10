import {useEffect, useState} from "react";
import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {CategoryService} from "../services/CategoryService.js";
import {ProductService} from "../services/ProductService.js";
import {useNavigate} from "react-router-dom";

export const ProductForm = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState({})
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState({
        name: '',
        price: 0,
        active: true,
        category_id: null
    })

    const getCategories = () => {
        setLoading(true);
        CategoryService.getCategories()
            .then(({data}) => {
                setCategories(data.data)
            }).catch().finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getCategories()
    }, [])

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        ProductService.store(product).then(() => {
            //TODO show notification
            navigate('/categories')
        }).catch(error => {
            const response = error.response
            if (response && response.status === 422)
                setErrors(response.data.errors)
        })
    }

    const showError = (error) => {
        return (
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>)
    }

    return (
        <Container className="mt-3">
            <Row>
                <Col>
                    <h3>New product</h3>
                </Col>
            </Row>
            <Row>
                <Col md="auto">
                    <Container>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3">

                                <Form.Label>Category</Form.Label>

                                <Form.Select
                                    name='category_id'
                                    required
                                    onChange={handleChange}
                                    isInvalid={!!errors.category_id}
                                >
                                    {loading &&
                                        <option key={'loading'}>Loading...</option>}
                                    {!loading &&
                                        <option key={'empty'}></option>}
                                    {categories.map(c => {
                                        return (
                                            <option key={c.id} value={c.id}>{c.name}</option>
                                        )
                                    })}
                                </Form.Select>
                                {errors.category_id?.map(showError)}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    value={product.name}
                                    name='name'
                                    onChange={handleChange}
                                    placeholder="Enter name"
                                    isInvalid={!!errors.name}
                                />
                                <Form.Text className="text-muted">
                                    Minimum 10 symbols
                                </Form.Text>
                                {errors.name?.map(showError)}
                            </Form.Group>

                            <Form.Group>

                                <Form.Label>Price</Form.Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control
                                        required
                                        name='price'
                                        value={product.price}
                                        onChange={handleChange}
                                        type={'number'} aria-label="Price"
                                        isInvalid={!!errors.price}
                                    />

                                    {errors.price?.map(showError)}

                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check
                                    required
                                    name='active'
                                    checked={product.active}
                                    onChange={e => setProduct({...product, active: e.target.checked})}
                                    type="checkbox"
                                    label="Active"

                                />
                            </Form.Group>

                            <Button variant="success" type="submit">
                                Create
                            </Button>
                        </Form>
                    </Container>
                </Col>
            </Row>

        </Container>);
}