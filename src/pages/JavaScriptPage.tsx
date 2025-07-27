import React from 'react';

import jsData from '../data/jsData.json';
import InfoCard from '../components/InfoCard';
import Title from '../components/Title';

export default function JavaScriptPage() {
  const lessons = jsData.lessons[0];

  console.log(lessons);

  return (
    <>
      <Title title='JavaScript Section' />
      <InfoCard />
    </>
  );
}
