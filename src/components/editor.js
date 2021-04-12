import React from 'react'

const editor = ( {render, handleChange} ) => {

    return (
        <div className="editor">
            <header className="header">Editor</header>
            <textarea 
                type="text"
                id="editor" 
                cols="70" rows="15" 
                value={render} 
                onChange={handleChange}></textarea>
        </div>
    )
}

export default editor