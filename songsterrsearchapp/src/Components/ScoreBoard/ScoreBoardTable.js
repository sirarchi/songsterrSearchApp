import React from 'react'
import Record from '../Record/Record'

const ScoreBoardTable = ({filterTabs, tablatureData, filteredTabs}) => {
    return (
        <div className="row styles.table-wrapper-scroll-y my-custom-scrollbar">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr className="">
                                <th className="align-middle" scope="col">ID</th>
                                <th className="align-middle" scope="col">Artist Name</th>
                                <th className="align-middle" scope="col">Title</th>
                                <th className="align-middle" scope="col">Type</th>
                                <th className="align-middle" scope="col">
                                    <p className="text-center">TabType</p>
                                    <div className="form-group mb-0">
                                        <select onChange={filterTabs} className="form-control" id="exampleFormControlSelect1">
                                            <option vale="player">player</option>
                                            <option value="text_guitar_tab">guitar</option>
                                            <option value="text_bass_tab">bass</option>
                                            <option value="chords">chords</option>
                                        </select>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                            <tbody>
                                { 
                                    tablatureData !== undefined ? 
                                    filteredTabs.map(item => {
                                        return <Record key={item.id} tablatureData={item} />
                                    }) : 
                                    null
                                }
                            </tbody>
                    </table>
            </div>
    )
}

export default ScoreBoardTable