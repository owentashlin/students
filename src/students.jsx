import Scores from "./scores"

function Students ({name, bio, scores}) {
    console.log(scores)
    return (
        <>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Bio:</strong> {bio}</p>
        {scores.map(score =>
            <Scores score={score.score} date={score.date}/>
        )}
        <hr></hr>
    </>   
    )
}

export default Students