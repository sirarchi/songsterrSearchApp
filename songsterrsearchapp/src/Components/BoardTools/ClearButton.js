import React from 'react'

const ClearButton = ({clearState}) => (
    <button
        onClick={clearState} 
        type="button" 
        className="btn btn-danger">
            Clear
    </button>
);

export default ClearButton