import styles from './MainNews.module.scss';
import Image from 'next/image';

export default async function MainNews() {
    return (
        <div className={styles.root}>
            <div className={styles.newsContainer}>
                <div className={styles.topRow}>
                    <div className={styles.popularNew}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                <h3>Самая читаемая новость</h3>
                            </div>
                            <div className={styles.subtitle}>
                                <p>Уникальная операция помогла 64-летнему учителю вернуться к жизни</p>
                            </div>
                        </div>

                        <div className={styles.image}>
                            <Image
                                className={styles.arrowLeft}
                                src="/images/popular.png"
                                alt="popular"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                    <div className={styles.mainNew}>
                        <div className={styles.title}>
                            <h3>Главная новость</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomRow}>
                    <div className={styles.newsItem}>
                    </div>
                </div>

            </div>



        </div>
    )
}