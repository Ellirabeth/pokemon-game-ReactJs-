import css from './style.module.css'

const Layout = ({title, descr, urlBg, colorBg}) => {

    // const layoutStyle = urlBg ? {backgroundImage: `url(${urlBg})`} : {background: `${colorBg}`}
    const layoutStyle = {
        backgroundImage: urlBg && `url("${urlBg}")`,
        backgroundColor: colorBg
    }

    console.log("<Layout /> : \n" +
        " title=" + title + "\n" +
        " descr=" + descr + "\n" +
        " urlBg=" + urlBg + "\n" +
        " colorBg= " + colorBg);

    const body = () => {
        return (
            <section className={css.root} style={layoutStyle}>
                <div className={css.wrapper} >
                    <article>
                        <div className={css.title}>
                            <h3>{title}</h3>
                            <span className={css.separator}></span>
                        </div>
                        <div className={`${css.desc}, ${css.full}`}>
                            <p>{descr}</p>
                        </div>
                    </article>
                </div>
            </section>
        )
    }

    return body();
}

export default Layout;