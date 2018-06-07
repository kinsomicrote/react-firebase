import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Flex, Box, Input, Button, Subhead, Text } from 'rebass';
import firebase from './firebase';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: null,
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.push('/dashboard');
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };
  render() {
    const { email, password, error } = this.state;
    return (
      <Container>
        <Flex>
          <Box>
            <Subhead>Log In</Subhead>
          </Box>
        </Flex>
        {error
          ? <Flex>
              <Box>
                <Text>{error.message}</Text>
              </Box>
            </Flex>
          : null}
        <Flex>
          <Box>
            <form onSubmit={this.handleSubmit}>
              <Input type="text" name="email" placeholder="Email" value={email} onChange={this.handleInputChange} />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleInputChange}
              />
              <Button children="Log In" />
            </form>
          </Box>
        </Flex>
      </Container>
    );
  }
}

export default withRouter(Login);
