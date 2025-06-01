import styles from './project.module.scss';
import ArrowRight from '@/assets/next-right-arrow.svg';

interface ProjectItem {
    href: string;
    name?: string;
    description?: string;
    imageSrc?: string;
    videoWebm?: string;
    videoMp4?: string;
    poster?: string;
  }

interface ProjectProps {
    item: ProjectItem;
}

const Project: React.FC<ProjectProps> = ({ item }) => {
    return (
        
        <div className={styles.projectItem}>
            <h5 className={styles.name}>{item.name}</h5>
            <div className={styles.descriptionBox}>
            <p className={styles.description}>{item.description}</p>
            </div>
           
            <a href={item.href} target='_blank' rel="noopener noreferrer" className={styles.container}>
                <div className={styles.videoWrap}>
                    <video className={styles.video} autoPlay loop muted playsInline preload='auto' poster={item.poster}>
                        <source src={item.videoWebm} type="video/webm" />
                        <source src={item.videoMp4} type="video/mp4" />
                    </video>
                </div>
                <div className={styles.button}>
                    <ArrowRight />
                </div>
            </a>
        </div>
        
    )
}

export default Project;