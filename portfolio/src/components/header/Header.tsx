import Link from 'next/link'
import styles from './header.module.css'


const Header = () =>{
    return(
      <header className={styles.header}>
        <div className={`${styles.fundo_back} ${styles.user}`}>
          <p>nicollasOR</p>
        </div>
        <nav>
          {/* <ul> */}
            <li>
              <div className={styles.fundo_back}>
                <Link href="" className={styles.link}>Home</Link>
              </div>
            </li>
            <li>
              <div className={styles.fundo_back}>
                <Link href="" className={styles.link}>Projects</Link>
              </div>
            </li>
            <li>
              <div className={styles.fundo_back}>
                <Link href="" className={styles.link}>Stack</Link>
              </div>
            </li>
            <li>
              <div className={styles.fundo_back}>
                <Link href="" className={styles.link}>Contact</Link>
              </div>
            </li>
            <li>
              <div className={styles.fundo_back} id={styles.idioma}>
                <button>pt-br</button>
                <button>en</button>
              </div>
            </li>
          {/* </ul> */}
        </nav>
      </header>
    )
}

export default Header