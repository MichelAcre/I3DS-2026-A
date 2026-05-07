import style from './Header.module.css'
import Carticon from '@mui/icons-material/ShoppingCart'

const Header = () => {
    return(
        <div className={style.HeaderTopo}>
            <div className={style.Devsteam}>
        <img src='/logo.png' alt='logo' className={style.Logo}></img>
        <h1 className={style.Logotext}>DevSteam</h1>
            </div>

        <input placeholder="Buscar" className={style.Search}></input>
        <Carticon className={style.Carticone} />
        </div>
    ) 
}

export default Header