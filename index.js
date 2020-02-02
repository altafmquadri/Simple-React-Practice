const getNumber = () => {
    return Math.floor(Math.random() * 10) + 1
}

class NumPicker extends React.Component {
    render() {
        const num = getNumber()
        return (
            <div>
                <h1>Your number is {num}</h1>
                <p>{num === 7 ? 'Congrats' : 'Aww try again'}</p>
            </div>
        )
    }
}


ReactDOM.render(<NumPicker/>, document.getElementById('root'))












/* const getMood = () => {
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid']
    return moods[Math.floor(Math.random() * moods.length)]
}  

class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My current mood is: {getMood()}</h1>
            </div>
        )
    }
}
ReactDOM.render(<JSXDemo/>, document.getElementById('root')) */


/* class JSXDemo extends React.Component {
    render() {
        return (
            <img src="https://images.alphacoders.com/605/605592.png"/>
        )
    }
}
ReactDOM.render(<JSXDemo/>, document.getElementById('root')) */

/* 
two ways of writing class or functional 
class needs a render method
class Hello extends React.Component {
    render() {
        return (
        <h1>Hello there!</h1>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))

const Hello = () => {
    return <h1>Hello there!</h1>
}

ReactDOM.render(<Hello/>, document.getElementById('root')) */