import React from 'react';
import styled from 'styled-components';

type LoginPageProps = {
  title: string;
  content: string;
};

function LoginPage({ title, content }: LoginPageProps) {
  const renderTitle = <h3>{title}</h3>;

  return (
    <S.HomePage>
      {renderTitle}
      <p>{content}</p>
    </S.HomePage>
  );
}

LoginPage.defaultProps = {
  title: '타이틀 기본 값',
  content: '콘텐츠 기본 값',
};

export default LoginPage;

const S: any = {};

S.HomePage = styled.div`
  ...style 작성;
`;
