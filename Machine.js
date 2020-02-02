class Machine extends React.Component {
    render() {
        let emojis = ['🍕', '🍔', '🍟', '🍣', '🍤', '🥫', '🥚', '🍘', '🧁', '🍷','🥝', '🍇', '🍍', '🍌' ]
        
        
        let random1 = Math.floor(Math.random() * 13) + 1
        let random2 = Math.floor(Math.random() * 13) + 1
        let random3 = Math.floor(Math.random() * 13) + 1
        let s1 = emojis[random1]
        let s2 = emojis[random2]
        let s3 = emojis[random3]

        const message = () => {
            let statement
            if (s1 === s2 && s2 === s3) {
                statement = 'You Win!!!'
            } else {
                statement = 'You Lose!'
            }
            return statement
        }
        return (
            <div>
                <h1>{message()}</h1>
                {s1} {s2} {s3}
            </div>
        )
    }
}

//test push