import * as React from 'react';
import { Component } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from "styled-components"
const Wrapper = styled.div`
  position: absolute;
  z-index: 999999;
  margin: 0 auto;
  width: -webkit-fill-available;
`;
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 25%;
`;
interface SpinnerProps {
    
}
 
interface SpinnerState {
    
}
 const antIcon = (
  <LoadingOutlined style={{ fontSize: 100, color: "primary" }} spin />
);
class Spinner extends React.Component<SpinnerProps, SpinnerState> {
    // state = { :  }
    render() { 
        return (
                <Wrapper>
      <Container>
        <Spin indicator={antIcon} />
      </Container>
    </Wrapper>
         );
    }
}
 
export default Spinner;