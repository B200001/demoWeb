import "./App.css";

import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



function App() {
  const url = "https://jsonplaceholder.typicode.com/posts/";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  return (


    <div className="main">
      <div className="first">
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            {' '}
            User
          </Navbar.Brand>
          
        </Container>
      </Navbar>
      </div>

      <div className="App">
        {data.map((dataObj, index) => {
          return (
            <div className="grid-container">


              <div className="container mx-auto mt-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card" style={{ width: '18rem', minHeight: '30rem' }}>

                      <div className="card-body">
                        <h5 className="card-title">#{dataObj.userId}- {dataObj.id}</h5>
                        <hr></hr>
                        <h2 className="subtitle-heading">Title</h2>
                        <h6 className="card-subtitle mb-2 text-muted">{dataObj.title}</h6>
                        <hr></hr>
                        <h2 className="title-heading">About</h2>
                        <p className="card-text">{dataObj.body}</p>
                        <hr></hr>
                        <a href="#" class="btn mr-2"><i class="fas fa-link"></i> Visit Site</a>
                        <a href="#" class="btn "><i class="fab fa-github"></i> Github</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>



  );
}

export default App;