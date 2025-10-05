import React from 'react';
import ModalSection from './styled-components/ModalSection.styled';
import Title from './Title';
import ParagraphSt from './styled-components/ParagraphSt.styled';
import CircleButtonSt from './styled-components/CircleButtonSt.styled';
import ArrowButtonSt from './styled-components/arrowButton.styled';

type PropsType = { title: string; paragraph: React.ReactNode; closeCb: () => void; toggle: (next: boolean) => void };

export default function ModalWindow({ title, paragraph, closeCb, toggle }: PropsType) {
  return (
    <ModalSection>
      <Title title={title} />
      <ParagraphSt className='data-text'>{paragraph}</ParagraphSt>
      <CircleButtonSt onClick={closeCb}>⨯</CircleButtonSt>
      <ArrowButtonSt $left onClick={() => toggle(false)}>
        ᐊ
      </ArrowButtonSt>
      <ArrowButtonSt onClick={() => toggle(true)}>ᐅ</ArrowButtonSt>
    </ModalSection>
  );
}
