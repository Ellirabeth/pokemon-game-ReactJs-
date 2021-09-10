import Footer from "./components/Footer"
import Header from "./components/Header"
import Layout from "./components/Layout"
import Stars from "./Assets/Stars.svg"
import Trees from "./Assets/Trees.svg"

const App = () => {
    return (
        <>
            <Header
                title ="HeaderTitle"
                descr="HeaderDescr"
            />
            <Layout
                title = "layoutTitle1"
                descr="LayoutDescr"
                urlBg={Stars}
            />
            <Layout
                title = "layoutTitle2"
                descr="LayoutDescr"
                urlBg={Trees}
            />
            <Layout
                title = "layoutTitle4"
                descr="LayoutDescr"
                colorBg="#cc0000"
            />
            <Footer/>
        </>
    )
}

export default App;
