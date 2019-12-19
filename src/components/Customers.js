import React from 'react';
import Customer from './Customer';
import PropTypes from 'prop-types';


const parseCustomers = (customers, selectCustomerCallback) => {
  return customers.map((customer) => {
    return <Customer
      key={customer.id}
      {...customer}
      selectCustomerCallback={selectCustomerCallback}
      />
  });
}

const Customers = ({customerList, selectCustomerCallback, resetMessageCallback}) => { // selectCustomerCallback
  return(
    <div>
      {resetMessageCallback()}
      {parseCustomers(customerList, selectCustomerCallback)}
    </div>
  )
}

Customers.propTypes = {
  customerList: PropTypes.array.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired,
  resetMessageCallback: PropTypes.func.isRequired,
};

export default Customers;