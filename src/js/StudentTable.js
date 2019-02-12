import React from 'react';
//props
//array of student objects.
//student object { rollnumber,first_name, Last_name, rank }
const StudentTable = function(props){
    let arr = [];
    for(let i=0;i<props.studentList.length;i++)
    {
        let student = props.studentList[i];
            arr.push(
                <tr key={i}>
                    <td>{student.rollNumber}</td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.rank}</td>
                </tr>
            )
    }
    return(
        <table>
            <th>Roll Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Rank</th>
            <tbody>
                {arr}
            </tbody>
        </table>
    )
}
export default StudentTable;