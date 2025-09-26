import React from 'react';

import Page from '../components/Page';

export default function TypeScriptPage() {
  const parts = ['Базовые типы и работа с данными', 'Составные типы', 'Контроль типов', 'Контекст и области видимости'];

  return <Page dataPart='tsLessons' titleName='TypeScript page' topic={parts} />;
}
