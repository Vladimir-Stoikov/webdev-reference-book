import React from 'react';

import data from '../data/jsData.json';

export default function InfoCard() {
  const header = data.lessons[0].header;
  return <h3>{header}</h3>;
}
