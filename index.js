class App extends React.Component {
    render(){
        return (
            <div>
                <Hello to='Sam'/>
                <Friend
                name="Elton"
                hobbies={['riding a motorcycle', 'programming']}/>
                <Friend
                name="Frida"
                hobbies={['riding a motorcycle', 'programming', 'sewing']}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))

