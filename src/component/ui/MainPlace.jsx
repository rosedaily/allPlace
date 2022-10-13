import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const { Meta } = Card;

const Wrapper = styled.div`
// position : absolute;
// left: 50%;
// top:50%;
`

const StyleImg = styled.img`
  width : calc( 100% );
  height : 270px;
`

function MainPlace(props){
  const { place, placeTitle, onClick } = props;

  return (
    <Wrapper onClick={(place) => {onClick(place.id)}}>
      <Card
        hoverable
        style={{ width: 340 }}
        cover={<StyleImg alt="example" src={place.placeImgs[0].imgUrl} />}
      >
        <Meta title={placeTitle} description={place.description}/>
      </Card>
    </Wrapper>
  )
}

export default MainPlace;