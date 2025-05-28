import React from 'react';

interface SocialElemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SocialElem: React.FC<SocialElemProps> = ({ href, children, className }) => {


    if (!href) {
        return null;
    }

    return (
        <a href={href} target='_blank' rel="noopener noreferrer" className={className}>
            {children}
        </a>
    );
};

export default SocialElem;

