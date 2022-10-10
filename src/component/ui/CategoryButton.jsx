import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

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

function CategoryButton(props){
  const { img, title, onClick } = props;

  return (
    <Wrapper>
      <div onClick={(img) => {onClick(title)}}>
        <StyleImg src={img.url}/>
        <div>
          <StyleP tyleP>{title}</StyleP>
        </div>
      </div>
    </Wrapper>
  )//dsdsd
}

export default CategoryButton;