import styles from './Navbar.module.css'

function Navbar(){
 
  


  return(
    
      <header className={styles.header}>
        <p><a href="#">Gmail</a></p>
        <p><a href="#">Imagens</a></p>
        <img src="/pontos.png" alt="ERROR" width={30} height={30} />
        <img src="/user.svg" alt="ERROR"  width={50} height={50} />
      </header >
   
   
  )
  

}
export default Navbar;