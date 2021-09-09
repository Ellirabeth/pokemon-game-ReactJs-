import React from 'react';
import ReactDom from 'react-dom';

const AppList = () => {
    return (
        <ul>
            <li>test 1</li>
            <li>test 2</li>
        </ul>
    )
}

const AppHeader = () => {
    return <h1>Hello World!</h1>;   
}

const el = (
    <>
        <AppHeader />
        <AppList />
    </>
)
// console.dir(document.createElement('h1'))

ReactDom.render(el, document.getElementById('root'))