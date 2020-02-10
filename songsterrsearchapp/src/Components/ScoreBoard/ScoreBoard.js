import React from 'react'
import ClearButton from '../BoardTools/ClearButton'
import Record from '../Record/Record'

const ScoreBoard = ({tablatureData}) => {
    let tablatureRecord
    if (tablatureData !== undefined) {
        tablatureRecord = tablatureData.map(item => {
            return <Record key={item.id} tablatureData={item} />
        })
    }

    return (
        <div className="container-md p-0">
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Artist Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tablatureRecord !== undefined ? tablatureRecord : <p>Nothing to show!</p>}
                    </tbody>
                </table>
            </div>
            <div className="row justify-content-end">
                <ClearButton />
            </div>
        </div>
    )
};

export default ScoreBoard