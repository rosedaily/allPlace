import React from 'react';
import styled from 'styled-components';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const Wrapper = styled.div`
  background-color : white;
  border : 1px solid #EDEDED;
  border-radius : 20px;
  // padding : 3px;
  display : flex;
  flex-direction : row;
  justify-content : flex-start;
  height : 47px
`

const ProfileWrapper = styled.div`
  background-color : white;
  border : 1px solid #EDEDED;
  border-radius : 20px;
  padding : 3px;
  margin-left : 35px;
  height : 45px
`

const StyleP = styled.p`
  color : black;
  margin-left : 15px;
  margin-top : 10px;
  font-size : 15px
`

function HeaderRight(props){
  return (
    <Wrapper>
      <div>
        <StyleP>호스트 되기</StyleP>
      </div>
      <ProfileWrapper onClick={() => {
        console.log("::프로필 이미지 클릭");
      }}>
      {/* <StyleLogo src="https://w7.pngwing.com/pngs/763/992/png-transparent-airbnb-business-san-francisco-logo-startup-company-business-text-people-logo-thumbnail.png"/> */}
        <Avatar icon={<MenuOutlined />} style={{color: '#413F42', backgroundColor : 'white'}} />
        <Avatar icon={<UserOutlined />} style={{marginLeft : '10px'}} />
      </ProfileWrapper>
    </Wrapper>
  )
}

export default HeaderRight;
