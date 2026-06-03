
import styles from './contact.module.css'


const Contact = () => {
    

    return(
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

    )
}

export default Contact