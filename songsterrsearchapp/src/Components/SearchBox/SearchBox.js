import React, { Component } from 'react'
import axios from 'axios'

class SearchBox extends Component {
    state = {
        results: [],
        searchInput: '',
    }

    tablatureDownload = () => {
        axios.get('http://www.songsterr.com/a/ra/songs.json?pattern=' + this.state.searchInput)
            .then(res => {
                    this.setState({
                    results: res.data
                })
                this.props.insertTablatureToMainState(this.state.results)
            })
            .catch(err => {
                    console.log(err);
                })
 
    }
    
    handleChange = event => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handleKeyDown = event => {
        if (event.key === 'Enter') {
            this.tablatureDownload()
            }
    }

    render() {
        return (
            <div className="container-md p-0">
                <div className="row">
                        <div className="input-group mb-3 mt-5 ">
                            <input  className="form-control form-control-lg bg-light" 
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyDown}
                                    type="text" 
                                    placeholder="Insert artist name or title..." 
                            />
                            <div className="input-group-append">
                                <button 
                                    className="btn btn-success btn-lg" 
                                    onClick={this.tablatureDownload} 
                                    type="button" 
                                    id="button-addon2">
                                        Search
                                </button>
                            </div>
                        </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBox