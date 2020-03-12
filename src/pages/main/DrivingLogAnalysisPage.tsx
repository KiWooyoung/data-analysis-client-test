import React from 'react';
import styled from 'styled-components';
import Map from '../../containers/main/MapContainer';
import RoadInfo from '../../containers/main/RoadInfoContainer';
import RouteETAInfo from '../../containers/main/RouteETAInfoContainer';
import RouteSetting from '../../containers/main/RouteSettingContainer';
import TrafficLiveInfo from '../../containers/main/TrafficLiveInfoContainer';

type DrivingLogAnalysisPageProps = {
  title: string;
  content: string;
};

function DrivingLogAnalysisPage({
  title,
  content,
}: DrivingLogAnalysisPageProps) {
  const renderTitle = <h3>{title}</h3>;

  return (
    <S.DrivingLogAnalysisPage>
      {renderTitle}
      <p>{content}</p>
    </S.DrivingLogAnalysisPage>
  );
}

DrivingLogAnalysisPage.defaultProps = {
  title: '타이틀 기본 값',
  content: '콘텐츠 기본 값',
};

export default DrivingLogAnalysisPage;

const S: any = {};

S.DrivingLogAnalysisPage = styled.div`
  ...style 작성;
`;
