import React from 'react'

const Record = ({tablatureData}) => {

    return (
        <tr>
            <th scope="row">{tablatureData.id}</th>
            <td>{tablatureData.artist.name}</td>
            <td>{tablatureData.title}</td>
            <td>{tablatureData.type}</td>
        </tr>

    )
}

export default Record