import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import Pusher from "pusher-js";

import uniquename from "../helpers/uniquename";
import stringHash from "string-hash";

const channel_name = uniquename();

const PUSHER_APP_KEY = process.env.REACT_APP_PUSHER_APP_KEY;
const PUSHER_APP_CLUSTER = process.env.REACT_APP_PUSHER_APP_KEY;
const BASE_URL = "YOUR NGROK HTTPS URL";

class LoginScreen extends Component {

  state = {
    username: "",
    channel: channel_name,
    isLoading: false,
  }

  constructor(props) {
    super(props);
    this.pusher = null;
    this.my_channel = null;
  }

  onTypeText = (evt) => {
    const field = evt.target.getAttribute('placeholder');
    this.setState({
      [field]: evt.target.value
    });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="4"></Col>
          <Col md={4}>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="username" value={this.state.username} onChange={this.onTypeText} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Channel</Form.Label>
                <Form.Control type="text" placeholder="channel" value={this.state.channel} onChange={this.onTypeText} />
                <Form.Text className="text-muted">
                  This is the name of your channel. Replace this if you want to connect to an existing channel.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="button" onClick={this.login} disabled={this.state.isLoading}>
                {this.state.isLoading ? 'Logging in…' : 'Login'}
              </Button>
            </Form>
          </Col>

          <Col md="4"></Col>
        </Row>
      </Container>
    );
  }
}

export default LoginScreen;