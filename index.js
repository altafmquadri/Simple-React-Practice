class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <NumPicker/>
                <JSXDemo/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))



