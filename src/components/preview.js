import React from 'react'

const preview = ( {render} ) => {
    return (
        <div id="preview" className="preview"
            dangerouslySetInnerHTML={{
                __html: render}}>
        </div>
    )
}

export default preview
