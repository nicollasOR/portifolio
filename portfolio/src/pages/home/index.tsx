import Link from "next/link";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.fundo_back}>
          <p>nicollasOR</p>
        </div>
        <nav>
          <ul>
            <li>
              <div className={styles.fundo_back}>
                <Link href=""></Link>
              </div>
            </li>
            <li>
              <div className={styles.fundo_back}>
                <Link href=""></Link>
              </div>
            </li>
            <li>
              <div className={styles.fundo_back}>
                <Link href=""></Link>
              </div>
            </li>
            <li>
              <div className={styles.fundo_back}>
                <Link href=""></Link>
              </div>
            </li>
            <li>
              <div className={styles.fundo_back} id={styles.idioma}>
                <button>pt-br</button>
                <button>en</button>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main>
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
        <section className={`${styles.holder} ${styles.about_me}`}>
          <h2>About me</h2>
          <p>
            Olá! Me chamo Nicollas e sou estudante técnico de desenvolvimento de
            sistemas, aspirante a desenvolvedor de software e a cientista da
            computação. Com interesse em desenvolvimento full-stack, possuo
            experiência em C# utilizando .NET e ASP.NET Core no back-end, além
            de bancos de dados relacionais como SQL Server. No front-end,
            utilizo JavaScript, bibliotecas como react e frameworks como next.js
            para criar interfaces dinâmicas. Durante meus estudos, venho
            desenvolvendo projetos aplicando metodologias ágeis como Kanban e
            Scrum, conceitos de arquitetura como MVC e Domain-Driven Design
            (DDD), e criação de APIs RESTful com C# e ASP.NET Core. Estou sempre
            buscando aprender novas tecnologias e evoluir como desenvolvedor.
          </p>
        </section>
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
        <section className={`${styles.holder} ${styles.contact}`}>
          <h2>Contact</h2>
          <p>Want to talk with me? Send me a email!</p>
          <div className={styles.contact_section}>
            <aside className={styles.lado_esquerdo}><h3>Hit me up</h3>
            <input type="text" className={styles.insert}/>
            <input type="text" className={styles.insert}/>
            <div className={styles.contact_imgs}><img src="" alt="" className={styles.contact_icon} /><img src="" alt="" className={styles.contact_icon} /></div></aside>
            <aside className={styles.lado_direito} ><textarea name="" id="" placeholder="Insert your message"></textarea></aside>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;