function Condition(){
    const heading = 'Condtions Topic'
    const description = 'This is decription for the Condtion function in react component.First I will revise loop and then we have some condtion'
    const comments = [
        { id: 1, name: 'Comment one', text:'Comment one text' },
        { id: 2, name: 'Comment two', text:'Comment two text' },
        { id: 3, name: 'Comment three', text:'Comment three text' },
    ]

    const loading = false
    const showComments = false

    if(loading == true) return <div><h2>Loading...</h2></div>

    return(
        <div>
            <h1>{ heading }</h1>
            <p>{ description }</p>
            <h3>Comments ({ comments.length })</h3>

            { showComments ? 'YES' : 'NO'}

            <ul>
                { comments.map((comment, index) => (
                    <li key={index} >{comment.text}</li>
                ))  }
            </ul>

        </div>
    )

}

export default Condition