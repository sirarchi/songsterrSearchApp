import React, { Component } from 'react'
import ClearButton from '../BoardTools/ClearButton'
import Record from '../Record/Record'

class ScoreBoard extends Component {
    state = {
        tablatureData: [],
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.tablatureData !== this.props.tablatureData) {
            this.setState({
                tablatureData: this.props.tablatureData
            })
        }
    }

    render () {
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
                            <th scope="col">Tab type</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                this.props.tablatureData !== undefined ? 
                                this.state.tablatureData.map(item => {
                                    return <Record key={item.id} tablatureData={item} />
                                }) : 
                                <p>Nothing to show!</p>
                            }
                        </tbody>
                    </table>
                </div>
                <div className="row justify-content-end">
                    <ClearButton />
                </div>
            </div>
        )
    }
    
};

export default ScoreBoard