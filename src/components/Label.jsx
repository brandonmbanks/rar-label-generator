import React from 'react'
import Barcode from 'react-barcode'


export default function Label({id, description}) {
    return (
        <div className="col-sm-4 mt-4">
            <h4>{description}</h4>
            <Barcode value={id} />
        </div>
    )
}
