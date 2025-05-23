import SocialElem from "./socialElem/socialElem";
import IconGit from '@/assets/git.svg';
import IconTg from '@/assets/tg.svg';

import styles from './social.module.scss';

const SocialList = () => {
    const socialData = [
        { href: "https://github.com/EllieWhite", icon: <IconGit/> },
        { href: "https://telegram.me/ElllieWhite", icon: <IconTg /> },
      ];
      
    return (
    <div className={styles.box}>
        {socialData.map((item, index) => (
        <SocialElem key={index} href={item.href}>
            {item.icon}
        </SocialElem>
        ))}
    </div>
    );
}
export default SocialList;