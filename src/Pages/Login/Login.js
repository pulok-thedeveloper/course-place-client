import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

    const [error, setError] = useState(null);
    const { signInUser, googleSignIn, githubSignin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider;
    const githubProvider = new GithubAuthProvider;
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = event => {
        setError(null)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                result = result.user;
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.code);
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        githubSignin(githubProvider)
            .then(result => {
                result = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <Container>
            <Row className='row justify-content-between'>
                <Col lg="5" className='mt-5'>
                    <Form onSubmit={handleLogIn}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Your Email Address" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Your Password" required />
                        </Form.Group>
                        <Button className='mb-3' variant="primary" type="submit">
                            LogIn
                        </Button>
                        <br />

                        <Form.Text className="text-danger">
                            {
                                error &&
                                <p>{error}</p>
                            }
                        </Form.Text>
                    </Form>
                    <Button onClick={handleGoogleSignIn} className='mb-3 me-3' variant="info" type="submit">
                        Login with Google
                    </Button>

                    <Button onClick={handleGithubSignIn} className='mb-3 me-3' variant="dark" type="submit">
                        Login with GitHub
                    </Button>
                    
                    <p>If your are new Then <Link to='/signup'>Create a New account</Link> </p>
                </Col>
            </Row>

        </Container>
    );
};

export default Login;