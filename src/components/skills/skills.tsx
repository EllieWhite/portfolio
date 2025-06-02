import styles from '@/components/skills/skills.module.scss';

const skills = [
    {
        title: 'HTML, Pug',
        activeCount: 7,
    },
    {
        title: 'React',
        activeCount: 3,
    },
  {
    title: 'CSS, Less, SCSS',
    activeCount: 7,
  },
  {
    title: 'Git',
    activeCount: 5,
  },
  {
    title: 'Bootstrap',
    activeCount: 4,
  },
  {
    title: 'Linux',
    activeCount: 3,
  },
  {
    title: 'JavaScript',
    activeCount: 4,
  },
  {
    title: 'TS',
    activeCount: 2,
  },
  {
    title: 'Shopify',
    activeCount: 5,
  },
  {
    title: 'CSS in JS',
    activeCount: 7,
  }
];

const Skills = () => {
    return (
      <section className={styles.skills}>
        <span className={styles.decore_1}></span>
        <div className="box">
          <h2 className={styles.title}>Мои навыки</h2>
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                <p className={styles.skillsTitle}>{skill.title}</p>
                <ul className={styles.skillsPanel}>
                  {[...Array(7)].map((_, id) => {
                    const isActive = id < skill.activeCount;
                    const elemClassName = isActive
                      ? `${styles.skillsElem} ${styles.isActive}`
                      : styles.skillsElem;
  
                    return <li key={id} className={elemClassName}></li>;
                  })}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };

export default Skills;

