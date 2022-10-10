import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color : white;
  display : flex;
  flex-direction : row;
  justify-content : flex-start;
  border : 1px solid #EDEDED;
  border-radius : 20px;
`

const StyleLogo = styled.img`
  margin-left : 50px;
  width : 70px;
`
const StyleP = styled.p`
  color : black;
  margin-top : 15px;
  margin-left : 15px;
  font-size : 15px
`



function SearchBar(props){
  return (
    <Wrapper>
      {/* <StyleLogo src="https://w7.pngwing.com/pngs/763/992/png-transparent-airbnb-business-san-francisco-logo-startup-company-business-text-people-logo-thumbnail.png"/> */}
      <div>
        <StyleP>어디갈래 | </StyleP>
      </div>
      <div>
        <StyleP>언제갈래 | </StyleP>
      </div>
      <div>
        <StyleP>누구랑 갈래 </StyleP>
      </div>
    </Wrapper>
  )
}

export default SearchBar;
