function Condition(){
    const heading = 'Condtions Topic'
    const description = 'This is decription for the Condtion function in react component.First I will revise loop and then we have some condtion'
    const comments = [
        { id: 1, name: 'Comment one', text:'Comment one text' },
        { id: 2, name: 'Comment two', text:'Comment two text' },
        { id: 3, name: 'Comment three', text:'Comment three text' },
    ]

    const loading = false
    const showComments = true

    if(loading == true) return <div><h2>Loading...</h2></div>

    const commentBlock = (
        <ul>
            { comments.map((comment, index) => (
                <li key={index} >{comment.text}</li>
            ))  }
        </ul>
    )

    // EXAMPLE ONE
    // { showComments ? 'YES' : 'NO'}

    // EXAMPLE TWO
    // { showComments ? (
    //     <ul>
    //         { comments.map((comment, index) => (
    //             <li key={index} >{comment.text}</li>
    //         ))  }
    //     </ul>
    // ) : 'NO' }

    // EXAMPLE THREE
    // { showComments && (
    //     <ul>
    //         { comments.map((comment, index) => (
    //             <li key={index} >{comment.text}</li>
    //         ))  }
    //     </ul>
    // ) }

    return(
        <div>
            <h1>{ heading }</h1>
            <p>{ description }</p>
            <h3>Comments ({ comments.length })</h3>

            { showComments && commentBlock }

        </div>
    )

}

export default Condition