import styles from './greeting.module.scss';
import Social from '../social/social';
import Ball from '../ball/ball';
const Greeting = () => {

    return (
        <section className={styles.greeting}>
            <div className={styles.decore_1}></div>
            <div className={styles.decore_2}></div>
            <div className={styles.decore_3}></div>
            <div className={`${styles.box} box`}>
                <div className={styles.about}>
                    <h1 className={styles.title_1}>Diana</h1>
                    <p className={styles.text}>Я Frontent-разработчик и&#160;работаю удаленно из&#160;Ростова-на-Дону</p>
                </div>
                <Social />
                <Ball/>

            </div>
        </section>
    )
}

export default Greeting;