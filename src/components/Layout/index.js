import css from './style.module.css'

const Layout = ({id, title, urlBg, colorBg, children}) => {
    const layoutStyle = {
        backgroundImage: urlBg && `url("${urlBg}")`,
        backgroundColor: colorBg
    }

    console.log("<Layout /> : \n" +
        " id=" + id + "\n" +
        " title=" + title + "\n" +
        " urlBg=" + urlBg + "\n" +
        " colorBg=" + colorBg + "\n" +
        " children= " + children);

    const body = () => {
        return (
            <section
                className={css.root}
                style={layoutStyle}
                id={id}
            >
                <div className={css.wrapper} >
                    <article>
                        <div className={css.title}>
                            <h3>{title}</h3>
                            <span className={css.separator}/>
                        </div>
                        <div className={`${css.desc} ${css.full}`}>
                            {children}
                        </div>
                    </article>
                </div>
            </section>
        )
    }

    return body();
}

export default Layout;