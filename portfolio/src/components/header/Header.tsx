import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.fundo_back} ${styles.user}`}>
        <p>nicollasOR</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="" className={`${styles.link} ${styles.fundo_back}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="" className={`${styles.link} ${styles.fundo_back}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href=""
              className={`${`${styles.link} ${styles.fundo_back}`} ${styles.fundo_back}`}
            >
              Stack
            </Link>
          </li>
          <li>
            <Link href="" className={`${styles.link} ${styles.fundo_back}`}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* <div className={styles.fundo_back} id={styles.idioma}>
                <button>pt-br</button>
                <button>en</button>
              </div> */}
      <div className={styles.fundo_back} id={styles.idioma}>
        <button>
          <span>pt-br</span>
        </button>
        <button>
          <span>en</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
