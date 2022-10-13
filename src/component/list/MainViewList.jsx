import React from 'react';
import styled from 'styled-components';
import MainPlace from '../ui/MainPlace';
import data from '../../data/placeData.json';

const Wrapper = styled.div`
  display : grid;
  grid-template-columns : 1fr 5fr 2fr;
  grid-gap: 50px;
  padding : 50px;
  width : 80%;
  padding-top:70px;
`

function MainViewList(props){

  return (
    <Wrapper>
      {data.map((place, index) => {
        return (
          <MainPlace 
            key={index.toString()}
            placeTitle={place.placeTitle}
            place={place}
            onClick={(title) => {
              console.log("::title::"+place.placeTitle);
            }}
          />
        );
      })}

    </Wrapper>

  )
}

export default MainViewList; 