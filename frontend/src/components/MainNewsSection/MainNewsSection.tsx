import styles from './MainNewsSection.module.scss';
import MainNews from '../MainNews/MainNews';

export default async function MainNewsSection() {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <MainNews />
            </div>
        </div>
    )
}