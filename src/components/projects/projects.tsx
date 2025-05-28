import Project from '../project/project';
import styles from './projects.module.scss';
import Trello from '@/assets/trello.jpg';
import VideoFinexMp4 from '@/assets/videos/finex.mp4';
import VideoFinexWebm from '@/assets/videos/finex.webm';
import VideoTrelloMp4 from '@/assets/videos/trello.mp4';
import VideoTrelloWebm from '@/assets/videos/trello.webm';
import PosterFinex from '@/assets/posterFinex.jpg';
import PosterTrello from '@/assets/posterTrello.jpg';

const Projects = () => {
  const projectData = [
    { 
      href: "https://elliewhite.github.io/finex", 
      name: 'Finex', 
      description: 'Лендинг для\u00A0финансовой компании, выполненный с\u00A0помощью React + Vite. \nЦель: отработка основ React. Содержит анимации, бегущую строку, форму обратной связи с\u00A0валидацией.', 
      videoMp4: `${VideoFinexMp4}`,
      videoWebm: `${VideoFinexWebm}`,
      poster: `${PosterFinex}`
    },
    { 
      href: "https://elliewhite.github.io/trello/", 
      name: 'Trello', 
      description: 'Веб-приложение, созданное с\u00A0помощью Vanilla JS. \nЦель: отработка навыков JS. Содержит смену фона, создание колонок, Drag-and-drop. Не\u00A0имеет состояний.', 
      imageSrc: `${Trello}`,
      videoMp4: `${VideoTrelloMp4}`,
      videoWebm: `${VideoTrelloWebm}`,
      poster: `${PosterTrello}`
    }
  ];

  return (
    <section className={styles.projects}>
      <span className={styles.decore_1}></span>
      <div className='box'>
        <h2 className={styles.title}>Проекты</h2>
        <div className={styles.wrapper}>
          {projectData.map((item, index) => (
            <Project key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

