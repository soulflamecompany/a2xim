import styles from "./About.module.scss";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
      <section className={styles.content}>
        <h2 className={styles.title}>О компании</h2>
        <div className={styles.infoWrapper}>
          <Image
            className={styles.logo}
            width={305}
            height={287}
            src="/logoAbout.png"
          ></Image>
          <div className={styles.info}>
            <span className={styles.infoText}>
              Группа компаний A2Xim создана группой профессионалов с опытом
              реализации международных проектов и организации проектного
              финансирования для них. Специализация нашей компании – торговля
              оборудованием, запасными частями и комплектующими для промышленных
              компаний, трейдинг и организация торгового финансирования.
            </span>
            <Link href="/about-company" legacyBehavior>
              <a className={styles.infoLink}>Подробнее</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
