import styles from './listaCard.module.css'

const ListaCard = () => {


    return (
        <section className={`${styles.holder} ${styles.proj_certs_skills}`}>
            <nav className={styles.port_navigation} aria-label="navigation of my portfolio">
              <ul className={styles.typeOf_nav}>
              <li><button>Projects</button></li>
              <li><button>Certifications</button></li>
              <li><button>Skills</button></li>
             </ul>
            </nav>
          <section className={styles.projects_selected}>
            <article className={styles.card}>
              <img src="" alt="" />
              <p></p>
              <div className={styles.fundo_back}>
                <p></p>
              </div>
            </article>

            <article className={styles.card}>
              <img src="" alt="" />
              <p></p>
              <div className={styles.fundo_back}>
                <p></p>
              </div>
            </article>

            <article className={styles.card}>
              <img src="" alt="" />
              <p></p>
              <div className={styles.fundo_back}>
                <p></p>
              </div>
            </article>
          </section>
          <section className={styles.certifications_selected}>
            <img src="" alt="" />
            <img src="" alt="" />
          </section>
          <section className={styles.skills_selected}>
            <ul className={styles.skills_list}>
              <li className={styles.skills_card}><img src="" alt="" className={styles.skills_icons}/></li>
              <li className={styles.skills_card}><img src="" alt="" className={styles.skills_icons}/></li>
              <li className={styles.skills_card}><img src="" alt="" className={styles.skills_icons}/></li>
              <li className={styles.skills_card}><img src="" alt="" className={styles.skills_icons}/></li>
            </ul>
          </section>
          </section>        

    )
}

export default ListaCard