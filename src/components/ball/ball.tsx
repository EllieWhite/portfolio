import styles from './ball.module.scss';
import DownloadBtn from '../downloadBtn/downloadBtn';
import CV from '@/assets/pdf/cv.pdf';
import Avatar from '@/assets/avatar.png';

const Ball = () => {
    return (
        <div className={styles.box}>
            <span className={styles.mainBall}></span>
            <span className={styles.circle}></span>
            <span className={styles.smallBall}></span>
            <DownloadBtn href={CV} text='CV' />
            <div className={styles.avatarBox}> 
                <img className={styles.avatar} src={Avatar}  />
            </div>

        </div>
    )
}

export default Ball;