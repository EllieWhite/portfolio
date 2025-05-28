import styles from './project.module.scss';

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
        
         <a className={styles.projectItem} href={item.href} target='_blank' rel="noopener noreferrer">
            <h5 className={styles.name}>{item.name}</h5>
            <div className={styles.descriptionBox}>
            <p className={styles.description}>{item.description}</p>
            </div>
           
            <div className={styles.container}>
                <div className={styles.videoWrap}>
                    <video className={styles.video} autoPlay loop muted playsInline preload='auto' poster={item.poster}>
                        <source src={item.videoWebm} type="video/webm" />
                        <source src={item.videoMp4} type="video/mp4" />
                    </video>
                </div>
            </div>
        </a>
        
    )
}

export default Project;