import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const keyFrameAnim = keyframes`
    0% {
        background-position: top center;
    }
    100% {
        background-position: bottom center;
    }
`;

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface IProps {
  background: string;
}

const LeftSide = styled.div<IProps>`
  width: 100vw;
  height: 40vh;
  background: url(${(p) => p.background}) no-repeat;
  background-size: cover;
  animation: ${keyFrameAnim} 25s ease infinite alternate;
`;

const RightSide = styled.div`
  width: 100vw;
  padding: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled(Link)`
  color: white;
  padding: 1rem;
  font-size: 2rem;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <LeftSide
        background={
          "https://jnswire.s3.amazonaws.com/jns-media/38/c0/11571637/personalitytest.jpeg"
        }
      />
      <RightSide>
        <StartButton
          to="/test"
          className="button-link"
        >{`Start Test >> `}</StartButton>
      </RightSide>
    </HomeWrapper>
  );
};

export default React.memo(Home);
