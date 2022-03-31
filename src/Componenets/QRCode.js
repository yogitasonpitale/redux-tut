import React from 'react'
import QRCode from 'react-qr-code'

function QRcode () {
  return (
    <div>
        <QRCode
        value='12345678'
        size={200}
        level={'H'}
        includeMargin={true}       
        />

    </div>
  )
}

export default QRcode;