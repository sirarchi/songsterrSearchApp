import React, { Component } from 'react'
import ClearButton from '../BoardTools/ClearButton'
import ScoreBoardTable from './ScoreBoardTable'

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
    }

    clearState = () => {
        this.setState({
            tablatureData: [],
        })
    }

    // filtereddTabs = (e) => {
    //     console.log('cos')
    //     if (e.length) {
    //         console.log('cos2')
    //         return e.filter((item) => {
    //             return item.tabTypes.indexOf(this.state.tabTypes) !== -1
    //         });   
    //     }
    // }

    render () {
        let filteredTabs = this.state.tablatureData.filter((item) => {
            return item.tabTypes.indexOf(this.state.tabTypes) !== -1
        });   


        return (
            <div className="container-md p-0">
                <ScoreBoardTable 
                    filterTabs={this.filterTabs} 
                    tablatureData={this.props.tablatureData} 
                    filteredTabs={filteredTabs} 
                />
                <div className="row justify-content-end">
                    <ClearButton clearState={this.clearState}/>
                </div>
            </div>
        )
    }
    
};

export default ScoreBoard