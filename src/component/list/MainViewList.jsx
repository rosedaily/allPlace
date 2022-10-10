import React from 'react';
import styled from 'styled-components';
import MainPlace from '../ui/MainPlace';
// import categoryImg from '../../data/categoryImg'
import data from '../../data/placeData.json';


const Wrapper = styled.div`
  display : flex;
`

function MainViewList(props){
  // const { images, onClickItem } = props;

  return (
    // <CategoryButton images={categoryImg}/>

    <Wrapper>

      {data.map((place, index) => {
        return (
          <MainPlace 
            key={index.toString()}
            placeTitle={place.placeTitle}
            place={place}
            // img={img} 
            onClick={(title) => {
              console.log("::title::");
            }}
          />
        );
      })}

    </Wrapper>

  )
}

export default MainViewList; 