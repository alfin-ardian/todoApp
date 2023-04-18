import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import EmptyImage from "../assets/activity-empty-state.svg";
import EmptyImageMobile from "../assets/activity-empty-state-mobile.svg";
import IconDelete from "../assets/activity-item-delete-button.svg";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Todo() {
  const title = "To Do List App";
  return (
    <>
      <Navbar
        style={{ backgroundColor: "#16ABF8", height: "105px" }}
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">{title.toUpperCase()}</Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <div class="flex justify-between items-center mt-10">
              <h1 className="text-3xl font-bold mr-10">Activity</h1>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#16ABF8",
                  borderRadius: "45px",
                  height: "54px",
                  width: "159px",
                }}
              >
                + Tambah
              </Button>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-auto-rows-max mt-10 gap-4">
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
              <Card
                style={{
                  width: "235px",
                  height: "234px",
                  borderRadius: "12px",
                }}
              >
                <Card.Body style={{ position: "relative" }}>
                  <Card.Title>
                    <h1
                      style={{
                        color: "#111111",
                        fontSize: "22px",
                        lineHeight: "27px",
                        fontWeight: "700",
                      }}
                    >
                      Daftar Belanja Bulanan
                    </h1>
                  </Card.Title>
                  <div
                    style={{ position: "absolute", bottom: 0, width: "90%" }}
                  >
                    <div class="flex justify-between items-center">
                      <Card.Text style={{ color: "#888888" }}>
                        5 oktober 2021
                      </Card.Text>
                      <img
                        src={IconDelete}
                        alt="icon delete"
                        style={{ top: "-7px", position: "relative" }}
                      />
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="flex justify-center mt-10">
              <img
                src={EmptyImageMobile}
                srcSet={`${EmptyImageMobile} 375w, ${EmptyImage} 768w`}
                sizes="(max-width: 600px) 375px, 768px"
                alt="My Image"
              />
            </div>
            {/* </div> */}
          </Col>
          {/* <Col xs lg="2">
            3 of 3
          </Col> */}
        </Row>
      </Container>
    </>
  );
}

export default Todo;
