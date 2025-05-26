import styles from './smallBall.module.scss';

interface SmallBallProps {
    className?: string
}

const SmallBall: React.FC<SmallBallProps> = ({ className }) => {
    let groupClassName = styles.smallBall; 

    if (className) {
        groupClassName += ' ' + className;
    }

    return (
        <span className={groupClassName}></span>
    );
}

export default SmallBall;