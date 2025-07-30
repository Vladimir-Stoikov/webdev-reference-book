import React from 'react';

import styled from 'styled-components';

const SectionSt = styled.section`
  padding: 5px 5px;
  width: 35%;
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

export default function InfoCard({ title }: { title: string }) {
  return (
    <SectionSt>
      <h3>{title}</h3>
    </SectionSt>
  );
}
