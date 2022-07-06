import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import EventPage from '../EventPage/EventPage';
import axios from 'axios';

const PostingContainer = styled.div`
  margin: 7%;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PostingInfo = styled.div`
  width: 500px;
  //height: 600px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  //background-color: yellow;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
`;

const ImgContainer = styled.img`
  width: 300px;
  height: 400px;
  object-fit: fill;
  margin: 10px;
`;

const ShowEvent = () => {
  //navigate 로 넘긴 데이터를 useLocation 으로 받는다.
  const location = useLocation();
  const navigate = useNavigate();
  const infos = location.state.infos;

  const onPostingClicked = () => {};

  return (
    <div>
      <PostingContainer>
        {/* infos.posts -> array */}
        {infos.posts.map((info, index) => (
          <div key={index}>
            <PostingInfo>
              <a href={`/post/${info._id}`}>
                <ImgContainer
                  src={info.main_img}
                  alt='images'
                  onClick={onPostingClicked}
                />
              </a>
              <p>{info._id}</p>
              <div
                style={{
                  fontWeight: '700',
                  fontSize: '19px',
                  marginBottom: '5px',
                }}
              >
                {info.title}
              </div>
              <div style={{ fontWeight: '500', marginBottom: '3px' }}>
                {info.codename}
              </div>
              <div style={{ fontSize: '14px' }}>{info.date}</div>
              <div>{info.place}</div>
            </PostingInfo>
          </div>
        ))}
      </PostingContainer>
    </div>
  );
};

export default ShowEvent;
