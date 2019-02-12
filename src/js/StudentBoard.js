import React from 'react';
import StudentTable from './StudentTable.js';

const StudentBoard = function(props){
    return(
        <StudentTable studentList={props.studentList}/>
    )
}

export default StudentBoard;