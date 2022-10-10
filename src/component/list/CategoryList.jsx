import React from 'react';
import styled from 'styled-components';
import CategoryButton from '../ui/CategoryButton';
import categoryImg from '../../data/categoryImg'


const Wrapper = styled.div`
  display : flex;
`

function CategoryList(props){
  const { images, onClickItem } = props;

  return (
    // <CategoryButton images={categoryImg}/>

    <Wrapper>

      {categoryImg.map((img, index) => {
        return (
          <CategoryButton 
            key={index.toString()}
            title={img.title}
            img={img} 
            onClick={(title) => {
              console.log("::title::"+title);
            }}
          />
        );
      })}

    </Wrapper>

  )
}

export default CategoryList; 