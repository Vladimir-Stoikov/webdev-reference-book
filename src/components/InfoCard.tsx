import React from 'react';
import { InfoCardSt } from './styled-components/InfoCard.styled';

interface InfoCardProps {
  title: string;
  onClick: () => void;
  lastRead?: string;
}

export default function InfoCard({ title, onClick, lastRead }: InfoCardProps) {
  return (
    <InfoCardSt onClick={onClick}>
      <h3>{title}</h3>
      {lastRead && <small>Последнее чтение: {new Date(lastRead).toLocaleDateString()}</small>}
    </InfoCardSt>
  );
}
