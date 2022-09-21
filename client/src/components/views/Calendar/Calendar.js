import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPostDateCount, getPostbyDay } from '../../../_actions/post_action';
import {
  Frame,
  Header,
  RightArrows,
  LeftArrows,
  Body,
  Day,
  Container,
  ContainerH1,
  Line,
  TextContainer,
  Text,
  Day_week,
  Day_container,
  Day_week_container,
  AllEvent,
  TopContainer,
  SubContainer,
  BottomContainer,
  Events,
  Month,
  Month_sub,
  Month_container,
} from './CalendarElements';

const Calendar = (isSelected) => {
  const dispatch = useDispatch();
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 평소 매달의 일수
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // 윤년 매달의 일수
  const DAYS_OF_THE_WEEK = ['일', '월', '화', '수', '목', '금', '토']; // 일주일 구성
  const MONTHS = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ]; // 월 구성

  const codenames = [
    '뮤지컬/오페라',
    '전시/미술',
    '연극',
    '콘서트',
    '클래식',
    '무용',
    '문화교양/강좌',
    '국악',
    '축제',
    '기타',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  const [todayEvent, setTodayEvent] = useState([]);

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
    dispatch(getPostDateCount(month)).then((res) => {
      setTodayEvent(res.payload.posts);
    });
  }, [date, dispatch, month]);

  function getStartDayOfMonth(date) {
    // 한달의 시작일 받는 함수
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year) {
    // 윤년 알고리즘 윤년은 4와 400으로 나누어지지만 100으로는 나누어지면 안된다
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS; // 윤년과 아닌년의 days 설정

  /**TODO
   *  날짜에 해당하는 포스트들 보여주기
   */
  const onClickDayPosts = (e) => {
    const day = e.target.id;
    dispatch(getPostbyDay(month, day)).then((res) => {
      console.log(res.payload);
    });
  };
  return (
    <>
      <Container>
        <ContainerH1>문화캘린더</ContainerH1>
        <Line></Line>

        <TextContainer>
          <Text>다양한 문화정보를 요일별, 월별로 한눈에 확인하세요</Text>
        </TextContainer>

        <Frame>
          <Header>
            <Month_container>
              <LeftArrows
                onClick={() => setDate(new Date(year, month - 1, day))}
              >
                Prev
              </LeftArrows>
              <Month>
                {' '}
                {/* Aug 2022 표현 부분 */}
                {MONTHS[month]}
                <Month_sub>월</Month_sub>
              </Month>
              <RightArrows
                onClick={() => setDate(new Date(year, month + 1, day))}
              >
                Next
              </RightArrows>
            </Month_container>
          </Header>
          <Body>
            <Day_week_container>
              {DAYS_OF_THE_WEEK.map((d) => (
                <Day_week key={d}>{<strong>{d}</strong>}</Day_week>
              ))}
            </Day_week_container>
            <Day_container>
              {Array(days[month] + startDay)
                .fill(null)
                .map((_, index) => {
                  const d = index - (startDay - 1);
                  const test = todayEvent.filter(
                    (event) => d === Number(event.end_date.slice(8, 10))
                  );

                  return (
                    <SubContainer id={d} onClick={onClickDayPosts}>
                      <TopContainer id={d}>
                        <Day
                          id={d}
                          key={index}
                          isToday={
                            year === today.getFullYear() &&
                            month === today.getMonth() &&
                            d === today.getDate()
                          }
                          isSelected={d === day}
                          onClick={() => setDate(new Date(year, month, d))}
                        >
                          {d > 0 ? d : ''}
                        </Day>

                        <AllEvent id={d}>
                          {d > 0 ? test.length + '건' : ''}
                        </AllEvent>
                      </TopContainer>
                      <BottomContainer id={d}>
                        {codenames.map((genre, idx) => {
                          let cnt = test.filter(
                            (post) => post.codename.startsWith(genre) === true
                          ).length;
                          if (d > 0 && cnt > 0) {
                            return (
                              <Events id={d} key={idx}>
                                {genre + cnt}
                              </Events>
                            );
                          }
                        })}
                      </BottomContainer>
                    </SubContainer>
                  );
                })}
            </Day_container>
          </Body>
        </Frame>
      </Container>
    </>
  );
};

export default Calendar;
