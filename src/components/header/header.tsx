import React, { useState, useEffect } from 'react';
import styles from './header.module.scss';

type Section = {
  id: string;
  title: string;
};

type HeaderProps = {
  sections: Section[];
  activeSection: string;
  scrollToSection: (id: string) => void;
};

const Header: React.FC<HeaderProps> = ({ sections, activeSection, scrollToSection }) => {
  const [delayedActive, setDelayedActive] = useState(activeSection);

  useEffect(() => {
    setDelayedActive('');
    const timer = setTimeout(() => {
      setDelayedActive(activeSection);
    }, 280);

    return () => clearTimeout(timer);
  }, [activeSection]);

  return (
    <div>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {sections.map(({ id, title }) => (
              <li
                key={id}
                className={`${styles.navItem} ${delayedActive === id ? styles.active : ''}`}
              >
                <button
                  className={styles.navElem}
                  onClick={() => scrollToSection(id)}
                >
                  <span className={styles.navElemText} data-title={title}>
                    {title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

