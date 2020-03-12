import React from 'react';
import styled from 'styled-components';
// import media from '../../lib/styles/media';
// import palette from '../../lib/styles/palette';
// import Button from '../common/Button';

export type ErrorScreenTemplateProps = {
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

function ErrorScreenTemplate({
  message,
  buttonText,
  onButtonClick,
}: ErrorScreenTemplateProps) {
  return (
    <Screen>
      <div className="message">{message}</div>
      {buttonText && (
        <div className="button-wrapper">
          {/*<Button size="large" onClick={onButtonClick}>*/}
          {/*  {buttonText}*/}
          {/*</Button>*/}
        </div>
      )}
    </Screen>
  );
}

const Screen = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 20rem;
    height: auto;
  }
  .message {
    padding-left: 1rem;
    padding-right: 1rem;
    white-space: pre;
    text-align: center;
    line-height: 1.5;
    font-size: 2.5rem;
    margin-top: 2rem;
  }
  .button-wrapper {
    margin-top: 2rem;
  }
`;

export default ErrorScreenTemplate;
