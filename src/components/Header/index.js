import css from './style.module.css'
const AppHeader = ({title, descr}) => {
    const body = () => {
        return(
            <header className={css.root}>
            <div className={css.forest}></div>
            <div className={css.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
        )
    }

    return body();
}


export default AppHeader;