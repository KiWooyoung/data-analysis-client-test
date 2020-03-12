import React from 'react';
import ErrorScreenTemplate from './ErrorScreenTemplate';

export type NetworkErrorScreenProps = {};

function NetworkErrorScreen(props: NetworkErrorScreenProps) {
  return (
    <ErrorScreenTemplate
      message={'서버와의 연결이 불안정합니다.\n잠시 후 시도해주세요.'}
      buttonText="새로고침"
      onButtonClick={() => window.location.reload()}
    />
  );
}

export default NetworkErrorScreen;
