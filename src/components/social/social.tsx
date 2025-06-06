import SocialElem from '@/components/social/socialElem/socialElem';
import IconGit from '@/assets/git.svg';
import IconTg from '@/assets/tg.svg';

import styles from '@/components/social/social.module.scss';

const SocialList = () => {
    const socialData = [
        { href: "https://github.com/EllieWhite", icon: <IconGit/> },
        { href: "https://telegram.me/ElllieWhite", icon: <IconTg /> },
      ];
      
    return (
    <div className={styles.box}>
        {socialData.map((item, index) => (
        <SocialElem key={index} href={item.href} className={styles.socialBtn}>
            {item.icon}
        </SocialElem>
        ))}
    </div>
    );
}
export default SocialList;