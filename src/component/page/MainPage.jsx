import React from 'react';
import styled from 'styled-components';
import CategoryList from '../list/CategoryList';
import MainViewList from '../list/MainViewList';
import SearchBar from '../ui/SearchBar';
import HeaderRight from '../ui/HeaderRight';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import data from '../../data/categoryImg.json';
import Search from 'antd/lib/transfer/search';

const Wrapper = styled.div`
  background-color : white;
  width : 1500px;
`

const StyleHeader = styled.div`
  width : 1500px;
  height : 75px;
  padding : 5px;
  width : calc( 100% - 32px );
  display : flex;
  flex-direction : row;
  justify-content : flex-start;
`

const StyleLogo = styled.img`
  margin-left : 50px;
  width : 150px;
  background-color : white;
`

const SearchBarDiv = styled.div`
  margin-left : calc( 40% - 170px);
  width : 300px;
`
const HeaderRightDiv = styled.div`
  margin-left : 230px;
  flex-direction : row;
  justify-content : flex-end;
`

const StyleBody = styled.div`
  height : 800px;
  padding : 10px;
`
const StyleFooter = styled.div`
  height : 200px;
  padding : 10px;
`

function MainPage(props){
  return (
    <Wrapper>
      <StyleHeader>
        <StyleLogo src="https://t1.daumcdn.net/cfile/tistory/993E8E4F5B2385B631"/>
        <SearchBarDiv>
          <SearchBar/>
        </SearchBarDiv>
        <HeaderRightDiv>
          <HeaderRight/>
        </HeaderRightDiv>
      </StyleHeader>
      <StyleBody>
        <CategoryList />
        <MainViewList />
      {/* <DatePicker /> */}
      {/* <Search /> */}

      </StyleBody>
      <StyleFooter>
        <CategoryList />
      </StyleFooter>
    </Wrapper>
  )
}

export default MainPage;
