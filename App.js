import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Segment,
  Content,
  Text
} from 'native-base';
export default class App extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Title>Hello</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search"/>
            </Button>
          </Right>
        </Header>
        <Segment>
          <Button first style={{justifyContent: 'center', paddingLeft: 6, paddingRight: 6}}>
            <Text>Puppies</Text>
          </Button>
          <Button style={{justifyContent: 'center', paddingLeft: 6, paddingRight: 6}}>
            <Text>Kittens</Text>
          </Button>
          <Button last active style={{justifyContent: 'center', paddingLeft: 6, paddingRight: 6}}>
            <Text>Cubs</Text>
          </Button>
        </Segment>
        <Content padder>
          <Text>Awesome segment</Text>
        </Content>
      </Container>
    );
  }
}