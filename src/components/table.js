import React, { useState } from 'react';
import './table.css'

const BidTable = ({ data }) => {
  const [selectedBid, setSelectedBid] = useState(null);

  const handleViewDetails = (bidNumber) => {
    setSelectedBid(bidNumber);
  };

  const handleViewLess = () => {
    setSelectedBid(null);
  };

  return (
    <div className="details-container">
      <table className="table">
        
        <thead>
        <tr style={{ border: '1px solid black' }}>
          <th style={{ border: '1px solid black', padding: '8px' }}>S.No</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Bid Number</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Created by</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Start Date & Time</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Bid Time Remaining</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>From City to City</th>
          
          <th style={{ border: '1px solid black', padding: '8px' }}>Vehicle Type,body,No.of vehical</th>
          
          <th style={{ border: '1px solid black', padding: '8px' }}>Material Weight</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Response</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Assigned Staff</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Details</th>
        </tr>
      </thead>
      
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="table-row">
              
              <td style={{ border: '1px solid black', padding: '8px' }}>{row.sNo}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.bidNumber}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.createdBy}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.startDate}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.bidTimeRemaining}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.fromCity} {row.toCity}</td>
            
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.vehicleType}{row.sizeBody}{row.numOfVehicles}</td>
            
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.materialWeight}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.response}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{row.assignedStaff}</td>
           
              <td className="table-cell">
                <button className="view-details-button" onClick={() => handleViewDetails(row.bidNumber)}>View Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBid && (
        <div>
          
          <div className="details-column">
            <h3>Bid Details for Bid Number: {selectedBid}</h3>
            
            <p>
              Bid Number: 16515120650125 (Sundar Yadav)<br />
              From: Mansar, Gurugram, Haryana<br />
              Landing Point: Ramchandra Ramowwal oil mill, Alwar, Rajasthan<br />
              Unloading Point: Ramchandra Raminiwas oil mill, Alwar, Rajasthan
            </p>
          </div>
          <div className="details-column">
            
            <p>
              Vehical Loading Date: 17/02/2024<br />
              Vehicle Type: 20ft Truck (Close Body)<br />
              Material: Agriculture Products<br />
              Weight: 14 Tonnes<br />
              Request Date: 15/02/2024<br />
              Expiry Date: 15/02/2024<br />
              Remarks: Urgent Delivery
            </p>
          </div>
          <div className="details-column">
            
            <p>
              Assisted Staff: Rahul Pandey<br />
              Phone Number: 332423442442<br />
              Trading Price: 5000<br />
              Number of Bidders for this Bid: 54
            </p>
          </div>
          <button className="view-less-button" onClick={handleViewLess}>View Less</button>
        </div>
      )}
    </div>
  );
};

export default BidTable;
