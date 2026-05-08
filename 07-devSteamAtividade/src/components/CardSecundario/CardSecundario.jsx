import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css' // importação do CSS do Bootstrap
import style from './CardSecundario.module.css'

const CardSecundario = (props) => {
    return (
        <>
        <div className={`${style.SecundarioBg} d-flex flex-column flex-md-row w-100 w-md-50`}> {/* combinação de classe do CSS module e classe do Bootstrap */}
            <img src={props.imagem} alt={props.titulo} className={style.ImgSec} />
            <div className={style.UmNomeBonitinho}>

            <div style={{ marginTop: '20px', lineHeight: '0%' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 700 }}>{props.titulo}</h2>
                <h4 style={{ fontSize: '16px', fontWeight: 400 }}>{props.categoria}</h4>
            </div>

                <div className='d-flex justify-content-between flex-column flex-md-row'>
                <h1 className={style.Price}>R${props.preco}</h1>
                <button className={style.CartBtn} onClick={props.onAddCarrinho}>
                    ADICIONAR AO CARRINHO
               </button>
                </div>

            </div>
        </div>
        </>
    )
}

export default CardSecundario