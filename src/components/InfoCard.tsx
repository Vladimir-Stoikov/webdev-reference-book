import React from 'react';
import styled from 'styled-components';

const SectionSt = styled.section`
  padding: 10px 10px;
  width: content;
  height: content;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border: solid 3px white;
  border-radius: 20px;
  box-shadow: 10px 10px 10px rgba(50, 50, 50, 0.5);
  background: linear-gradient(46deg, rgba(34, 34, 34, 1) 0%, rgba(34, 34, 34, 1) 20%, #444444 52%, #3a3a3a 75%, rgba(34, 34, 34, 1) 100%);
`;

interface InfoCardProps {
  title: string;
  onClick: () => void;
}

export default function InfoCard({ title, onClick }: InfoCardProps) {
  return (
    <SectionSt onClick={onClick}>
      <h3>{title}</h3>
    </SectionSt>
  );
}
