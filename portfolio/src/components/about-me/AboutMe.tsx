import styles from './aboutme.module.css'

const AboutMe = () =>{
    return(
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
    )
}

export default AboutMe