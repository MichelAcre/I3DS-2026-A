import style from './CardSecundario.module.css'

const CardSecundario = () => {
    return(
        <>
        <div className={style.SecundarioBg}>
            <img src='https://placehold.co/400' className={style.ImgSec}></img>
            <div style={{marginTop: '20px', lineHeight: '0%'}}>
            <h2 style={{fontSize: '20px', fontWeight: 700}}>NOME DO JOGO</h2>
            <h4 style={{fontSize: '16px', fontWeight: 400}}>Tags, Modos</h4>
            <h1 className={style.Price}>R$99,90</h1>
            </div>
            <button className={style.CartBtn}>ADICIONAR AO CARRINHO</button>
        </div>
        </>
    )
}
export default CardSecundario