import React, { Component } from 'react';

import styled from 'styled-components';
import service from './service';

const Wrapper = styled.div`
  background-color: ${props => props.theme.darkBg};
  float: right;
  border-radius: .5rem;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 4.5rem;
`;

const Title = styled.div`
  color: #1565C0;
  text-align: center;
  font-size: 2rem;
`;

const Main = styled.div`
  color: ${props => props.theme.ctrText};
  font-size: 3rem;
  text-align: center;
`;

const AnimationAdd = styled.div`
  position: absolute;
  height: 3rem;
  width: 8rem;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 4rem;
  font-weight: bolder;
  display: none;
  color: white;
`;

class Score extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  componentDidMount() {
    this.scoreSubscription = service.score$.subscribe(({ value }) => {
      this.setState({ value });
    });
  }

  componentWillUnmount() {
    this.scoreSubscription.unsubscribe();
  }

  render() {
    const { value } = this.state;
    return (
      <Wrapper>
        <AnimationAdd  className="jquery-animate-score" />
        <Title>SCORE</Title>
        <Main>{value}</Main>
      </Wrapper>
    );
  }

}

export default Score;