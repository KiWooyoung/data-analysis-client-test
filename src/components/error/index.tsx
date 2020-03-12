import React, { Component, ErrorInfo, ReactNode } from 'react';

import ErrorView from './ErrorScreenTemplate';

interface Props {
  children: ReactNode;
}

interface State {
  readonly error?: Error | null | undefined;
}

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  readonly state: State = {
    error: undefined,
  };

  componentDidCatch(error: Error | null, errorInfo: ErrorInfo): void {
    this.setState({ error }, () => {
      console.log(errorInfo);
    });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return (
        <ErrorView
          message={'서버와의 연결이 불안정합니다.\n잠시 후 시도해주세요.'}
          buttonText="새로고침"
          onButtonClick={() => window.location.reload()}
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
