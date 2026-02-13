    import React from 'react'
    import Styles from "./Perfil.module.css"
    
    const Perfil = ({ children, fotoPerfil }) => {
      return (
                <div Id={Styles.Perfil}>
        <img src={fotoPerfil} alt="" />
        <p>@{children}</p>
      </div>
      )
    }
    
    export default Perfil
    