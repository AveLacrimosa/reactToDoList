import React from 'react'

const TableForTask = (props) => {
    console.log(props.list)
    return (
        <table>
            <thead>
                <tr>
                    <th>eil nr.</th>
                    <th>uzduotis</th>
                    <th>ar uzbaigta</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map((task, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.text}</td>
                            <td>{task.isCompleted ? 'done' : 'in progress'}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TableForTask