function Comment(){

    const title = 'Welcome to Comments'
    const body = 'This is comment component body'
    const comments = [
        {   id: 1, text:'Comment 1' },
        {   id: 3, text:'Comment 2' },
        {   id: 3, text:'Comment 3' },
    ]

    return(
        <div className="container">
            <h2>{title}</h2>
            <p>{body}</p>
            <h3> Comments ({comments.length})</h3>
            <ul>
                { comments.map((comment, index) => (
                    <li key={index} >{comment.text}</li>
                )) }
            </ul>
        </div>
    )
}

export default Comment