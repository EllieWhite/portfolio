import React from 'react';
import styles from './socialElem.module.scss';

interface SocialElemProps {
  href: string;
  children: React.ReactNode;
}

const SocialElem: React.FC<SocialElemProps> = ({ href, children }) => {
    if (!href) {
        return null;
    }

    return (
        <a href={href} target='_blank' rel="noopener noreferrer" className={styles.socialElem}>
            {children}
        </a>
    );
};

export default SocialElem;

