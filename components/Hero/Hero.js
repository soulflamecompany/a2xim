import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <h1 className={styles.title}>A2XI</h1>
        <h2 className={styles.subtitle}>Ваш надежный бизнес-партнер</h2>
      </section>
    </main>
  );
};
export default Hero;
