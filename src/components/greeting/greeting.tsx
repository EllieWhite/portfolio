import styles from './greeting.module.scss';
import Social from '../social/social';
import Ball from '../ball/ball';
const Greeting = () => {

    return (
        <section className={styles.greeting}>
            <span className={styles.decore_1}></span>
            <span className={styles.decore_2}></span>
            <span className={styles.decore_3}></span>
            <div className={`${styles.box} box`}>
                <div className={styles.about}>
                    <h1 className={styles.title_1}>Hello!</h1>
                    <p className={styles.text}>Меня зовут Диана и&#160;я&#160;Frontent-разработчик, работаю удаленно из&#160;Ростова-на-Дону</p>
                </div>
                <div className={styles.socialDesktop}>
                    <Social />
                </div>
                <Ball/>

            </div>
        </section>
    )
}

export default Greeting;