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

Customer.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  registered_at: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  postal_code: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  account_credit: PropTypes.number.isRequired,
  movies_checked_out_count: PropTypes.number.isRequired,
  selectCustomerCallback: PropTypes.func.isRequired,
};

export default Customer;