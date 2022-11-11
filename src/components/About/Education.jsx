import React from 'react'
import './education.css'

const Education = () => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Degree</th>
                <th>Department</th>
                <th>Institute</th>
                <th>Year</th>

            </tr>

        </thead>

        <tbody>
            <tr>
                <td>B ECE</td>
                <td>Engineering</td>
                <td>Kirinyaga University</td>
                <td>2020 -PRESENT</td>
            </tr>
            <tr>
                <td>CIT</td>
                <td>computer sci</td>
                <td>Cisco</td>
                <td>2017-2020</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Education