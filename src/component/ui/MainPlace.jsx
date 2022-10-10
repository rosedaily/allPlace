import React from 'react';
import styled from 'styled-components';
// import { Button } from 'antd';

const Wrapper = styled.div`
  display : flex;
  margin-left : 20px;
  margin-right : 20px;
`

const StyleImg = styled.img`
  width : 40px;
  `
  const StyleP = styled.p`
  width : 50px;
  font-size : 0.4em;
  color : black;
`

function MainPlace(props){
  const { place, placeTitle, onClick } = props;

  return (
    <Wrapper>
      <div onClick={(place) => {onClick(place.id)}}>
        <StyleImg src={place.placeImgs[0].imgUrl}/>
        <div>
          <StyleP tyleP>{placeTitle}</StyleP>
        </div>
      </div>
    </Wrapper>
  )//dsdsd
}

export default MainPlace;