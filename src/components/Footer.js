import styles from "./Footer.module.css"
function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.div1} >
        <p>Brasil</p>
      </div>
      <div className={styles.div2} >
        <div className={styles.list1}>
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Publicidade</a></li>
            <li><a href="#">Negócios</a></li>
            <li><a href="#">Como funciona a Pesquisa</a></li>

          </ul>
        </div>
        <div className={styles.list2}>
          <ul>
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li>
            <li><a href="#">Configurações</a></li>
            

          </ul>
        </div>
      </div>

    </footer>
  )
}
export default Footer;