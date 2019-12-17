import React from 'react';
import Customer from './Customer';
// import PropTypes from 'prop-types';


const parseCustomers = (customers, selectCustomerCallback) => {
  return customers.map((customer) => {
    return <Customer
      key={customer.id}
      {...customer}
      selectCustomerCallback={selectCustomerCallback}
      />
  });
}

const Customers = ({customerList, selectCustomerCallback}) => { // selectCustomerCallback
  return(
    <div>
      {parseCustomers(customerList, selectCustomerCallback)}
    </div>
  )
}

export default Customers;