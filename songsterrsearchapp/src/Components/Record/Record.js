import React from 'react'

const Record = ({tablatureData, tabTypeFilter}) => {

    const tabTypes = tablatureData.tabTypes.toString().toLowerCase();


    const moveToOriginalWebsite = (url) => {
        document.location = encodeURI(url)
    }

    const tabLink = 'https://www.songsterr.com/?pattern=' + tablatureData.title;

    return (
                <tr onClick={() => moveToOriginalWebsite(tabLink)}>
                        <th scope="row">{tablatureData.id}</th>
                        <td>{tablatureData.artist.name}</td>
                        <td>{tablatureData.title}</td>
                        <td>{tablatureData.type}</td>
                        <td>{tabTypes}</td>
                </tr>

    )
}

export default Record