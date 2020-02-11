import React, { Component } from 'react'
import ClearButton from '../BoardTools/ClearButton'
import Record from '../Record/Record'

class ScoreBoard extends Component {
    state = {
        tablatureData: [],
        tabTypes: 'PLAYER',
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.tablatureData !== this.props.tablatureData) {
            this.setState({
                tablatureData: this.props.tablatureData
            })
        }
    }

    filterTabs = (e) => {
        if(this.state.tabTypes !== e.target.value) {
            this.setState({
                tabTypes: e.target.value.toUpperCase()
            })   
        }
  
        console.log(this.filteredTabs);
        
    }

    render () {
        let filteredTabs = this.state.tablatureData.filter((item) => {
            return item.tabTypes.indexOf(this.state.tabTypes) !== -1
        });
        return (
            <div className="container-md p-0">
                <div className="row">
                    <table className="table table-striped">
                        <thead>
                            <tr className="">
                                <th className="align-middle" scope="col">ID</th>
                                <th className="align-middle" scope="col">Artist Name</th>
                                <th className="align-middle" scope="col">Title</th>
                                <th className="align-middle" scope="col">Type</th>
                                <th className="align-middle" scope="col">
                                    <p className="text-center">TabType</p>
                                    <div className="form-group mb-0">
                                        <select onChange={this.filterTabs} className="form-control" id="exampleFormControlSelect1">
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
                                this.props.tablatureData !== undefined ? 
                                filteredTabs.map(item => {
                                    return <Record key={item.id} tablatureData={item} />
                                }) : 
                                <tr>
                                    <th>Nothing to show!</th>
                                </tr>
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