import style from './GameCard.module.css'

const GameCard = () => {
    return(
        <div className={style.GameCard}>
            <img src='https://placehold.co/400' className={style.ImgGame}></img>
        </div>
    )
}
export default GameCard