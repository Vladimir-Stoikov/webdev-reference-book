import React, { useEffect, useState } from 'react';
import '../pages/generalPages.css';
import parse from 'html-react-parser';
import webData from '../data/webDevData.json';
import InfoCard from '../components/InfoCard';
import Title from '../components/Title';
import MainSt from '../components/styled-components/MainSt.styled';
import SectionSt from '../components/styled-components/SectionSt.styled';
import ModalWindow from '../components/ModalWindow';
import { SidebarSt } from './styled-components/Sidebar.styled';
import CardsListSt from './styled-components/CardsList.styled';
import { useProgress } from '../hooks/useProgress';

type activeType = {
  status: boolean;
  dataId: number;
};

type DataType = {
  jsLessons: {
    id: number;
    header: string;
    content: string;
  }[];
  tsLessons: {
    id: number;
    header: string;
    content: string;
  }[];
  react: {
    id: number;
    header: string;
    content: string;
  }[];
  exercises: {
    id: number;
    header: string;
    content: string;
  }[];
};

type PagePropType = {
  dataPart: string;
  titleName: string;
  topic?: string[];
};

export default function Page({ dataPart, titleName, topic }: PagePropType) {
  const lessons = webData[dataPart as keyof DataType];
  const [active, setActive] = useState<activeType>({ status: false, dataId: 0 });

  const { lastRead, getProgress } = useProgress();

  function modelWindowHandler(lessonId?: number) {
    if (lessonId && !active.status) {
      setActive({ status: true, dataId: lessonId });
      lastRead(`${dataPart}-${lessonId}`);
    } else {
      setActive({ status: false, dataId: 0 });
    }
  }

  function togglePage(next: boolean) {
    const last = lessons.length;
    if (next) {
      if (active.dataId !== last) {
        setActive(prev => ({ status: true, dataId: prev.dataId + 1 }));
      }
    } else {
      if (active.dataId !== 1) {
        setActive(prev => ({ status: true, dataId: prev.dataId - 1 }));
      }
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
      <Title title={titleName} />
      <SectionSt>
        {topic && (
          <SidebarSt>
            <ul>
              {topic.map((el, id) => (
                <li key={id}>{el}</li>
              ))}
            </ul>
          </SidebarSt>
        )}
        <CardsListSt>
          {lessons.map((part, id) => {
            const progressData = getProgress(`${dataPart}-${part.id}`);
            return <InfoCard key={id} title={part.header} onClick={() => modelWindowHandler(part.id)} lastRead={progressData?.lastRead} />;
          })}
        </CardsListSt>
        {active.status && <ModalWindow title={lessons[active.dataId - 1].header} paragraph={parse(lessons[active.dataId - 1].content)} closeCb={modelWindowHandler} toggle={togglePage} />}
      </SectionSt>
    </MainSt>
  );
}
