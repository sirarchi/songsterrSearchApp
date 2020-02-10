import React, { Component } from 'react'

class SearchBox extends Component {
    render() {
        return (
            <div className="container-md p-0">
                <div className="row">
                        <div className="input-group mb-3 mt-5 ">
                            <input type="text" className="form-control form-control-lg bg-light" placeholder="Insert artist name or title..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-success btn-lg" type="button" id="button-addon2">Search</button>
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