import Scores from "./scores"

function Students ({name, bio, scores}) {
    console.log(scores)
    return (
        <>
        <li>Name: {name}</li>
        <li>Bio: {bio}</li>
        {/* <li>Scores: {student.scores.map(student =>
            <Scores score={student.score} date={student.date}/>
        )}
        </li>    */}
    </>   
    )
}

export default Students