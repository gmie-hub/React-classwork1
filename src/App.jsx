import { Fragment } from "react";
import{Card, Col, Container, Row} from "react-bootstrap"
import './App.css';
import Input from "./components/input";
import Nav from "./components/nav";

function App() {
  return (
    <Fragment>
      <Nav name={'Logo'}/>
      <Container as={"section"} fluid>
        <Row>
          <Col className="col-lg-7 d-flex justify-content-center align-items-center col-7-bg">
            <Card className="border radius-30 card-width px-4 py-5">
              <Card.Title className="ps-3"><h2 className="fw-bold pt-5 pb-3">Get started with a free quotation</h2></Card.Title>
              <Card.Body>
                <form className="mb-5">
                    <div className="input-group-lg mb-3">
                      <Input label={'Name'} type={'text'} placeholder={'Enter your Name'}/>
                    </div>
                    <div className="input-group-lg mb-3">
                      <Input label={'Email'} type={'email'} placeholder={'Enter a valid email address'}/>
                    </div>
                    <div className="input-group-lg">
                      <Input label={'Message'} type={'textarea'} placeholder={"Enter your message"}/>
                    </div>
                    <div class="form-check pt-3">
                      
                      <label class="form-check-label fs-5" htmlFor="flexCheckDefault">
                      <input class="form-check-input fs-5 " type="checkbox" value="" id="flexCheckDefault"/>
                        I accept the <span style={{color: '#d443dd'}}>Term Of Service</span> 
                      </label>
                    </div>
                    <button className="btn btn-bg text-white btn-height btn-radius fs-2 btn-group-lg h-50 mt-3 w-100 ">Submit your request</button>
                  </form>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-lg-5 d-flex flex-column align-items-center col-5-bg">
            <div className="my-auto">
              <h2 className="fw-bold text-font text-white">Create your website with Nicepage.</h2>
                <p className="fs-3 text-white pt-5">Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
          </Col>
        </Row>
      </Container>
      
    </Fragment>
  );
};

export default App;
