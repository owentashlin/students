function Students (name, bio, scores) {
    return (
    <>
       <ul>
            <li className='name'>{name}</li>
            <li className='bio'>{bio}</li>
            <li className='scores'>{scores}</li>
        </ul>
    </>   
      )
}

export default Students