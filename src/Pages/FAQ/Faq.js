import React from 'react';
import { Container } from 'react-bootstrap';

const Faq = () => {
    return (
        <Container className="m-5">
            <h2>What is Cors?</h2>
            <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</p>


            <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
            <p>
                Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </p>


            <h2>How does the private route work?</h2>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>


            <h2>What is node? How does node js work?</h2>
            <p>Node.js is an open source server environment. Node.js is free. Node.js can generate dynamic page content.</p>
            <p>Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </Container>
    );
};

export default Faq;