import styles from "./About.module.css";

function About() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>About FILM</h1>
            <p className={styles.description}>
                <span className={styles.highlight}>FILM</span>은 평점 9점대의
                최고 평점 영화를 추천하는 플랫폼입니다. 신중하게 선정된 고평점
                영화들을 제공하며, 상세한 정보와 함께 영화의 매력을 깊이 있게
                전달합니다.
            </p>
            <h2 className={styles.featuresTitle}>📌 FILM의 특징</h2>
            <ul className={styles.featuresList}>
                <li>🎬 **평점 9점대의 명작 영화 추천**</li>
                <li>📖 **줄거리, 개봉 연도, 평점 등의 상세 정보 제공**</li>
                <li>🎥 **공식 트레일러 및 미리보기 영상 제공**</li>
            </ul>
            <p className={styles.description}>
                FILM과 함께 최고의 영화를 발견하고, 감동적인 순간을
                경험해보세요! 🍿✨
            </p>
        </div>
    );
}

export default About;
