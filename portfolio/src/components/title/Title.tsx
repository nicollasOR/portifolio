import styles from './title.module.css'

const Title = () =>{
    return(
        <section className={`${styles.holder} ${styles.title}`}>
          <aside className={styles.lado_esq}>
            <h1>Software Developer</h1>
            <span>Software Engineer Student</span>
            <ul className={styles.technologies}>
              <li className={styles.fundo_back}>C#</li>
              <li className={styles.fundo_back}>.NET</li>
              <li className={styles.fundo_back}>php</li>
              <li className={styles.fundo_back}>T-SQL</li>
              <li className={styles.fundo_back}>Next.js</li>
              <li className={styles.fundo_back}>TS</li>
              <li className={styles.fundo_back}>JS</li>
            </ul>
            <ul className={styles.social}>
              <li>
                <img src="" alt="Icon of social media Linkedin" />
              </li>
              <li>
                <img src="" alt="Icon of social media Github" />
              </li>
              <li>
                <img src="" alt="Icon of social media Gmail" />
              </li>
            </ul>
          </aside>
        </section>        
    )
}

export default Title