import React from 'react'



const Cardlistitem = ({_id, data_center, vendor, serial_no, last_anamoly, previous_issue}) => (
    <tr>
    <td>{data_center}</td>
    <td>{vendor}</td>
    <td>{serial_no}</td>
    <td>{last_anamoly}</td>
    <td>{previous_issue}</td>
    </tr>
)

export default Cardlistitem