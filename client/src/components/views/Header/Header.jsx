import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//jsx 컴포넌트 만들 때, PascalCase 나 SCREAMING_SNAkE_CASE 가 규칙
const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  margin-right: 50px;
  margin-top: 10px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #ffcb6b;
`;

const HeaderLogo = styled.div`
  font-family: 'YUniverse-B';
  color: #faebd7;
  font-size: 60px;
  margin: 15px 5px;
  cursor: pointer;
  text-shadow: 1px 1px 1px #000;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffcb6b;
  width: 70px;
  height: 50px;
  border-radius: 0px 0px 100px 100px;
  border: 2px solid #faebd7;
  background-color: #faebd7;
  font-size: 17px;
  font-family: 'YUniverse-B';
  text-shadow: 1px 1px 1px gray;
  margin-left: 2px;
  cursor: pointer;
`;

const MypageBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffcb6b;
  width: 70px;
  height: 50px;
  border-radius: 0px 0px 100px 100px;
  border: 2px solid #faebd7;
  background-color: #faebd7;
  font-size: 17px;
  font-family: 'YUniverse-B';
  text-shadow: 1px 1px 1px gray;
  margin-left: 2px;
  cursor: pointer;
`;

const NewpostingBtn = styled.div`
  display: flex;
  align-items: center;
  color: #ffcb6b;
  width: 70px;
  height: 50px;
  border-radius: 0px 0px 100px 100px;
  border: 2px solid #faebd7;
  background-color: #faebd7;
  font-size: 17px;
  font-family: 'YUniverse-B';
  text-shadow: 1px 1px 1px gray;
  margin-left: 2px;
  text-align: center;
  cursor: pointer;
`;

const RegisterBtn = styled.div`
  display: flex;
  align-items: center;
  color: #ffcb6b;
  width: 70px;
  height: 50px;
  border-radius: 0px 0px 100px 100px;
  border: 2px solid #faebd7;
  background-color: #faebd7;
  font-size: 17px;
  font-family: 'YUniverse-B';
  text-shadow: 1px 1px 1px gray;
  margin-left: 2px;
  text-align: center;
  cursor: pointer;
`;

const GenreBar = styled.div`
  display: flex;
  height: 55px;
  //width: 100%;
  padding: 10px 100px;
  justify-content: space-between;
  background-color: white;
  align-items: center;
  //border-bottom: solid 1px lightgrey;
  box-shadow: 5px 5px 5px lightgray;
`;

const GenreBtn = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  &:hover {
    //background-color: #a9a9a9;
    border-bottom: 4px solid #ffcb6b;;
  }
`;


function Header() {
  const navigate = useNavigate();
  const onLogoClicked = () => {
    navigate('/');
  };

  const onLoginbtnClicked = () => {
    navigate('/login');
  };

  const onRegiterClicked = () => {
    navigate('/register');
  };
  const onPostClicked = () => {
    navigate('/post');
  };

  return (
  <>
    <HeaderContainer>
      <MenuContainer>
        <NewpostingBtn onClick={onPostClicked}>New Post</NewpostingBtn>
        <MypageBtn>My page</MypageBtn>

        <LoginBtn onClick={onLoginbtnClicked}>Login</LoginBtn>
        <RegisterBtn onClick={onRegiterClicked}>Regiser</RegisterBtn>
      </MenuContainer>

      <HeaderLogo type='button' onClick={onLogoClicked}>
        Public Culture
      </HeaderLogo>
    </HeaderContainer>
    <GenreBar>
      <GenreBtn>뮤지컬/오페라</GenreBtn>
      <GenreBtn>전시/미술</GenreBtn>
      <GenreBtn>연극</GenreBtn>
      <GenreBtn>콘서트</GenreBtn>
      <GenreBtn>클래식</GenreBtn>
      <GenreBtn>무용</GenreBtn>
    </GenreBar>
  </>
  );
}

export default Header;
