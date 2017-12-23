import React from 'react'
import Barcode from 'react-barcode'


export default function Label({description, id}) {
    return (
        <div className="col-sm-6">
            <h4>{description}</h4>
            <Barcode value={id} displayValue={false}/>
        </div>
    )
}
