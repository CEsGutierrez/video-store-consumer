import React from 'react';
import PropTypes from 'prop-types';

const Customer = ({id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count, selectCustomerCallback}) => {
  return (
    <div>
      {name}
      <button
          // className="btn btn-primary pet-card--select-pet-btn"
          onClick={() => { selectCustomerCallback(id, 'customerList', 'currentCustomer' ) }}
        >
          Select
      </button>
    </div>
  )
}

export default Customer;