import { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Register = () => {
    const [error, setError] = useState(null);
    const {createUser, updateUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignUp = (event) => {
        setError(null)
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const url = form.url.value;

        if(password.length < 6){
            setError('Password should be at least 6 character or more');
            return;
        }

        if(password!== confirm){
            setError('Password did not match');
            return;
        }

        createUser (email, password)
        .then(result => {
            updateUser(name, url)
            .then(() => {
            })
            .catch(error =>{
                console.error(error);
                setError(error.code);
            });
            form.reset();
            navigate('/');
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
            setError(error.code);
        });

    }
    return (
        <Container>
            <Row className='row justify-content-center'>
                <Col lg="5" className='mt-5'>
                    <Form onSubmit={handleSignUp}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Enter Your Full Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Your Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Your Email Address" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Your Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control name='confirm' type="password" placeholder="Confirm Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicURL">
                            <Form.Label>Enter Your Photo URL</Form.Label>
                            <Form.Control name='url' type="url" placeholder="Enter Your Photo Url" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SignUp
                        </Button><br></br><br></br>
                        <Form.Text className="text-danger">
                            <p>{error}</p>
                        </Form.Text>
                    </Form>
                    <p>Already have an account? <Link to='/login'>Sign in</Link> </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Register;