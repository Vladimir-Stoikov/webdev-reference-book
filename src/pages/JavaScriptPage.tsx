import React from 'react';

import jsData from '../data/jsData.json';
import InfoCard from '../components/InfoCard';
import Title from '../components/Title';
import styled from 'styled-components';

const MainSt = styled.main`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
`;

export default function JavaScriptPage() {
  const lessons = jsData.lessons;

  console.log(lessons);

  return (
    <MainSt>
      <Title title='JavaScript Section' />
      <section>
        {lessons.map((part, id) => (
          <InfoCard key={id} title={part.header} />
        ))}
      </section>
    </MainSt>
  );
}
