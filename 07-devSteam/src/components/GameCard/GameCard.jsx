import style from './GameCard.module.css'

const GameCard = () => {
    return(
        <div className={style.GameCard}>
            <img src='https://placehold.co/400' className={style.ImgGame}></img>
            <div className={style.Precos}>
                <h2 className={style.Text16}>OFERTA EXCLUSIVA</h2>
                <div className={style.Valores}>
                    <div className={style.Desconto}>50%</div>
                    <div className={style.Preco}><span className={style.PrecoOriginal}>R$199,99</span> <br/>
                        R$99,90
                    </div>
                </div>
                <button className={style.AddCart}>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    )
}
export default GameCard