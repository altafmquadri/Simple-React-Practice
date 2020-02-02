
// two ways of writing class or functional 
// class needs a render method

class Hello extends React.Component {
    render() {
        let bangs = "!".repeat(this.props.bangs)
        return (
        <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'))

/* const Hello = () => {
    return <h1>Hello there!</h1>
}

ReactDOM.render(<Hello/>, document.getElementById('root')) */