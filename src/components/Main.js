import styles from './Main.module.css'

function Main (){
  return(
    <main className={styles.main}>
      <img src='/google.svg' alt='ERROR' />
      <div className={styles.container} >
        <img src='/lupa.svg' alt='ERROR' />
        <input />
        <img className={styles.img} src='/teclado.svg' alt='ERROR' />
        <img className={styles.img}  src='/microfone.svg' alt='ERROR' />
      </div>
      
      
      <div  className={styles.button}>
        <button>Pesquisa Google</button>
        <button>Estou com sorte</button>


      </div>
      <div className={styles.segurity}> 
        <img src='/segurit.svg' alt='ERROR' />
        <p><a href='#'>Faça o Check-up de privacidade</a></p>
      </div>
     
    </main>
  )
}
export default Main;