import React from 'react';
import { InfoCardSt } from './styled-components/InfoCard.styled';

interface InfoCardProps {
  title: string;
  onClick: () => void;
}

export default function InfoCard({ title, onClick }: InfoCardProps) {
  return (
    <InfoCardSt onClick={onClick}>
      <h3>{title}</h3>
    </InfoCardSt>
  );
}
