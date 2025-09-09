import React, { useEffect, useState } from 'react';
import './generalPages.css';
import parse from 'html-react-parser';
import jsData from '../data/webDevData.json';
import InfoCard from '../components/InfoCard';
import Title from '../components/Title';
import MainSt from '../components/styled-components/MainSt.styled';
import SectionSt from '../components/styled-components/SectionSt.styled';
import ModalSection from '../components/styled-components/ModalSection.styled';
import ParagraphSt from '../components/styled-components/ParagraphSt.styled';
import CircleButtonSt from '../components/styled-components/CircleButtonSt.styled';

type activeType = {
  status: boolean;
  dataId: number;
};

export default function ExercisesPage() {
  const lessons = jsData.exercises;
  const [active, setActive] = useState<activeType>({ status: false, dataId: 0 });

  function modelWindowHandler(lessonId: number) {
    console.log('click');
    if (!active.status) {
      setActive({ status: true, dataId: lessonId });
    }
  }

  useEffect(() => {
    if (active.status) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, [active]);

  return (
    <MainSt>
      <Title title='Exercises Section' />
      <SectionSt>
        {lessons.map((part, id) => (
          <InfoCard key={id} title={part.header} onClick={() => modelWindowHandler(part.id)} />
        ))}
        {active.status && (
          <ModalSection>
            <Title title={lessons[active.dataId - 1].header} />
            <ParagraphSt className='data-text'>{parse(lessons[active.dataId - 1].content)}</ParagraphSt>
            <CircleButtonSt onClick={() => setActive({ status: false, dataId: 0 })}>⨯</CircleButtonSt>
          </ModalSection>
        )}
      </SectionSt>
    </MainSt>
  );
}
