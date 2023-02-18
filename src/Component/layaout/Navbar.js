import {Link} from 'react-router-dom'
import Container from './Container';
import logo from '../../img/costs_logo.png'
import styles from './Navbar.module.css'
import CartWidget from '../../Component/CartWidget'
export function Navbar() {
  return (
    <nav className={styles.navbar}>
     <Container>
        <Link to="/">
            <img src={logo} alt="costs"></img>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/home">Inicio</Link></li>
          <li className={styles.item}><Link to="/product">Productos</Link></li>
          <li className={styles.item}><Link to="/company">Sobre nosotros</Link></li>
        </ul>
        <CartWidget/>
        </Container>
    </nav>
  );
}

export default Navbar
