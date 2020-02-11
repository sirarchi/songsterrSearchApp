import React from 'react'

const Record = ({tablatureData, tabTypeFilter}) => {

    // const tabTypes = tablatureData.tabTypes.map((item) => {
    //     return (item.split(' ').toLowerCase());
    // })

    const tabTypes = tablatureData.tabTypes.toString().toLowerCase();

    // let tabTypePlayer = tablatureData.tabTypes.filter((item) => {
    //     return item === "Player"
    // })


    return (
            <tr>
                <th scope="row">{tablatureData.id}</th>
                    <td>{tablatureData.artist.name.slice(0, 15)}</td>
                    <td>{tablatureData.title.slice(0, 25)}</td>
                    <td>{tablatureData.type}</td>
                    <td>{tabTypes}</td>
            </tr>

    )
}

export default Record