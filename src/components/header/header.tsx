import React, { useState, useEffect } from 'react';
import styles from '@/components/header/header.module.scss';
import SocialElem from '@/components/social/socialElem/socialElem';
import Social from '@/components/social/social';

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
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const toggleBurgerMenu = () => setIsBurgerMenuOpen(!isBurgerMenuOpen)

  useEffect(() => {
    setDelayedActive('');
    const timer = setTimeout(() => {
      setDelayedActive(activeSection);
    }, 280);

    return () => clearTimeout(timer);
  }, [activeSection]);

  const handleNavItemClick = () => {
    setIsBurgerMenuOpen(false); 
  };

  return (
    <div>
      <button
        className={`${styles.burgerBtn} ${isBurgerMenuOpen && styles.active}`}
        onClick={toggleBurgerMenu}>
        <span className={styles.burgerDot}></span>
        <span className={styles.burgerDot}></span>
        <span className={styles.burgerDot}></span>
      </button>
      <header className={`${styles.header} ${isBurgerMenuOpen && styles.active}`}>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {sections.map(({ id, title }) => (
              <li
                key={id}
                className={`${styles.navItem} ${delayedActive === id ? styles.active : ''}`}
                onClick={handleNavItemClick} 
              >
                <button className={styles.navElem} onClick={() => scrollToSection(id)}>
                  <span className={styles.navElemText} data-title={title}>
                    {title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <SocialElem href='https://telegram.me/ElllieWhite' className={`${styles.navBtnContact}`} isContact>Contact Me</SocialElem>
        <div className={styles.socialMobile}>
          <Social />
        </div>
      </header>
    </div>
  );
};

export default Header;



