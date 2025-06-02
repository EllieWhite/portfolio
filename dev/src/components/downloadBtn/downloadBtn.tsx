import styles from '@/components/downloadBtn/downloadBtn.module.scss';

interface DownloadBtnProps {
    href: string;
    text: string;
}

const DownloadBtn: React.FC<DownloadBtnProps> = ({href, text}) => {
    if (!href) {
        return null;
    }

    return (
        <a className={styles.downloadBtn} download href={href} target='_blank' rel='noopener noreferrer'>
            <span className={styles.text}>{text}</span>
        </a>
    )
}

export default DownloadBtn;