import React from 'react';
import styled from 'styled-components';

type HomePageProps = {
  title: string;
  content: string;
};

function HomePage({ title, content }: HomePageProps) {
  const renderTitle = <h3>{title}</h3>;

  return (
    <S.HomePage>
      {renderTitle}
      <p>{content}</p>
    </S.HomePage>
  );
}

HomePage.defaultProps = {
  title: '타이틀 기본 값',
  content: '콘텐츠 기본 값',
};

export default HomePage;

const S: any = {};

S.HomePage = styled.div`
  ...style 작성;
`;
