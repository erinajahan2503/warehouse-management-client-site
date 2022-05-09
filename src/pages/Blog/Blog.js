import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (

        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header >Difference between JavaScript and Nodejs.</Accordion.Header>
                <Accordion.Body>
                    JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a server-side programming language based on Google Chrome V8. As a result, network-centric applications are built with it.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>When should you use nodejs and when should you use mongodb?
                </Accordion.Header>
                <Accordion.Body>
                    NodeJS and MongoDB are two distinct technologies. MonogDB is a database system that allows you to effectively store documents in a database and execute operations such as data updates and document searches based on certain criteria. The responsibility of NodeJS is to run your application
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Differences between sql and nosql databases.
                </Accordion.Header>
                <Accordion.Body>
                    SQL is a Relational Database Management System, whereas NoSQL is a Non-relational or Distributed Database. NoSQL databases employ dynamic schema for unstructured data, whereas SQL databases have a predetermined schema. SQL databases are scalable vertically, whereas NoSQL databases are scalable horizontally. SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pair, or graph databases
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What is the purpose of jwt and how does it work?
                </Accordion.Header>
                <Accordion.Body>
                    JWT's full form is JSON Web Token. is an open standard that allows two parties — a client and a server — to share security information. JSON items, containing a set of claims, are encoded in each JWT. JWTs use a cryptographic technique to ensure that the claims cannot be changed after the token has been issued. JWTs are unique among web tokens in that they include a set of claims. Claims are a type of communication between two parties. The nature of these claims is determined by the use case at hand. A claim could specify who issued the token, how long it is valid, or what permissions the client has been given
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>

    );
};

export default Blog;