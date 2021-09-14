import css from './style.module.css'
const AppHeader = () => {
    const body = () => {
        return (
            <footer>
                <div className={css.wrapper}>
                    <h3>THANKS FOR VISITING</h3>
                    <p>© 2021 #ReactMarathon.</p>
                </div>
            </footer>
        )
    }

    return body();
}

export default AppHeader;