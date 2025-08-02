import React from 'react';

import jsData from '../data/jsData.json';
import InfoCard from '../components/InfoCard';
import Title from '../components/Title';
import MainSt from '../components/MainSt.styled';

export default function TypeScriptPage() {
  const lessons = jsData.tsLessons;

  return (
    <MainSt>
      <Title title='TypeScript Section' />
      <section>
        {lessons.map((part, id) => (
          <InfoCard key={id} title={part.header} onClick={() => console.log('open modal window')} />
        ))}
      </section>
    </MainSt>
  );
}
