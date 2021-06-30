import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function NewMerchForm(props) {
  function handleAddingNewMerchToList(e) {
    e.preventDefault();
    props.onNewMerchCreation({name: e.target.name.value, price: e.target.price.value, quantity: e.target.quantity.value, picture: e.target.picture.value, id: v4()});
  };

  return(
    <React.Fragment>
      <form onSubmit={handleAddingNewMerchToList}>
        <input
          type='text'
          name='name'
          placeholder='Merch name' />
          <hr/>
        <input
          type='text'
          name='price'
          placeholder='Merch price' />
          <hr/>
        <input
          type='number'
          name='quantity'
          placeholder='Merch quantity' />
        <input
          type='text'  //changed from 'file'
          name='picture'
          accept='image/*' />
          <hr/>
        <button type='submit'>Add New Merch</button>
        <hr/>
      </form>
    </React.Fragment>
  );
};

NewMerchForm.protoTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;