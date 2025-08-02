import React from 'react';

import jsData from '../data/jsData.json';
import InfoCard from '../components/InfoCard';
import Title from '../components/Title';
import MainSt from '../components/MainSt.styled';

export default function JavaScriptPage() {
  const lessons = jsData.jsLessons;

  return (
    <MainSt>
      <Title title='JavaScript Section' />
      <section>
        {lessons.map((part, id) => (
          <InfoCard key={id} title={part.header} onClick={() => console.log('open modal window')} />
        ))}
      </section>
    </MainSt>
  );
}
