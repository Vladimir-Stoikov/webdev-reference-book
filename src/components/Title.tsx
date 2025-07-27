import React from 'react';
import styled from 'styled-components';

const H1St = styled.h1`
  color: white;
  font-size: 2rem;
`;

export default function Title({ title }: { title: string }) {
  return <H1St>{title}</H1St>;
}
