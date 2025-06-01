import React from 'react';
import styles from './socialElem.module.scss';

interface SocialElemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isContact?: boolean;
}

const SocialElem: React.FC<SocialElemProps> = ({ href, children, className, isContact }) => {


    if (!href) {
        return null;
    }

    return (
        <a href={href} target='_blank' rel="noopener noreferrer" className={`${className ? className : ''} ${isContact ? styles.btnContact : ''}`}>
            {children}
        </a>
    );
};

export default SocialElem;

