import React from 'react';
import Customer from './Customer';
// import PropTypes from 'prop-types';


const parseCustomers = (customers) => {
  return customers.map((customer) => {
    return <Customer
      key={customer.id}
      {...customer}
      // selectCustomerCallback={props.selectCustomerCallback} // will be another prop passed in
      />
  });
}

const Customers = ({customerList}) => { // selectCustomerCallback
  return(
    <div>
      {parseCustomers(customerList)}
    </div>
  )
}

export default Customers;