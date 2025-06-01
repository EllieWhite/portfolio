import styles from './about.module.scss';

import Laptop from '@/assets/laptop.png';

import SmallBall from '../smallBall/smallBall';
import SocialElem from '../social/socialElem/socialElem';
const About = () => {
    return (
        <section className={styles.about}>
            <span className={styles.decore_1}></span>
            <span className={styles.decore_2}></span>
            <span className={styles.decore_3}></span>
            <span className={styles.decore_4}></span>
            <div className='box'>
                <div className={styles.contentBox}>
                    <div className={styles.photoBox}>
                        <img src={Laptop} className={styles.photo}/>
                        <SmallBall className={`${styles.smallBall}`} />
                    </div>
                    <div className={styles.wrap}>
                        <p className={styles.textContent}>
                            Более 4-х лет коммерческого опыта во&#160;фронтенд&#8209;разработке. Создаю функциональные, оптимизированные цифровые решения с&#160;использованием подхода mobile&#8209;first, Pixel Perfect 
                            и&#160;многое другое.
                        </p>
                        <SocialElem href='https://telegram.me/ElllieWhite' className={`${styles.btnContact}`} isContact>Contact Me</SocialElem>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About;