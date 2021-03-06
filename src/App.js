import Footer from "./components/Footer"
import Header from "./components/Header"
import Layout from "./components/Layout"
import Bg3 from "./Assets/bg3.jpg"
import Bg1 from "./Assets/bg1.jpg"
import PokemonCard from "./components/PokemonCard";
import css from "./style.module.css"
import pokemonList from "./pokemon"

const App = () => {
    return (
        <>
            <Header
                title="Pokemon Game"
                descr="This is simple triple triad card game"
            />
            <Layout
                id="rules"
                title="Rules of game..."
                urlBg={Bg3}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>

                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
            </Layout>
            <Layout
                id="cards"
                title="Card deck"
                colorBg="#202736"
            >
                <div className={css.flex}>
                    {
                        pokemonList.map((item) => <PokemonCard key={item.id} {...item} />)
                    }
                </div>
            </Layout>
            <Layout
                id="about"
                title="This is about layout"
                urlBg={Bg1}
            >
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
                <p>Each players has five cards in a hand and the aim is to capture the opponent`s cards by turning them into the player`s own color of red or blue.</p>
            </Layout>

            <Footer/>
        </>
    )
}

export default App;
