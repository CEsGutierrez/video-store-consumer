import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Customer = ({id, name, registered_at, address, city, state, postal_code, phone, account_credit, movies_checked_out_count, selectCustomerCallback}) => {
  
  const nickCage = 'https://i1.sndcdn.com/avatars-000139920883-maf14v-t500x500.jpg'

  return (
    <div className='card'>
      <section className='card__content'>
        <img src={nickCage} className='card__content-image' alt='Nicolas Cage'/>
        <section className='card__content-text'>{name}</section>
        <section className='card__content-text'>{phone}</section>
        <section className='card__content-text'>Credit: ${account_credit.toFixed(2)}</section>
        <button
            className='card__select'
            onClick={() => { selectCustomerCallback(id, 'customerList', 'currentCustomer' ) }}
          >
            Select
        </button>
      </section>
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