import React, { useState } from 'react';

import jsData from '../data/jsData.json';
import InfoCard from '../components/InfoCard';
import Title from '../components/Title';
import MainSt from '../components/MainSt.styled';
import SectionSt from '../components/SectionSt.styled';
import ModalSection from '../components/modalSection.styled';

type activeType = {
  status: boolean;
  dataId: number;
};

export default function TypeScriptPage() {
  const lessons = jsData.tsLessons;
  const [active, setActive] = useState<activeType>({ status: false, dataId: 0 });

  function modelWindowHandler(lessonId: number) {
    console.log('click');
    if (!active.status) {
      setActive({ status: true, dataId: lessonId });
    }
  }

  return (
    <MainSt>
      <Title title='TypeScript Section' />
      <SectionSt>
        {lessons.map((part, id) => (
          <InfoCard key={id} title={part.header} onClick={() => modelWindowHandler(part.id)} />
        ))}
        {active.status && (
          <ModalSection>
            <Title title={lessons[active.dataId - 1].header} />
            <p>{lessons[active.dataId - 1].content}</p>
            <button onClick={() => setActive({ status: false, dataId: 0 })}>CLOSE</button>
          </ModalSection>
        )}
      </SectionSt>
    </MainSt>
  );
}
