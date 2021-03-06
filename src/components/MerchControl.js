import React from "react";
import NewMerchForm from "./NewMerchForm";
import MerchList from "./MerchList";

class MerchControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false,
            masterMerchList: []
        };
        //this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
        this.setState((prevState) => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
        }));
    };

    handleAddingNewMerchToList = (newMerch) => {
        const newMasterMerchList = this.state.masterMerchList.concat(newMerch);
        this.setState({
            masterMerchList: newMasterMerchList,
            formVisibleOnPage: false,
        });
    };

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleState = 
              <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList} />;
            buttonText = "Go back to merch list";
        } else {
          currentlyVisibleState = 
            <MerchList merchList={this.state.masterMerchList} />;
            buttonText = "Add new merch";
        }
        return (
          <React.Fragment>
            {currentlyVisibleState}
            <button onClick={this.handleClick}>{buttonText}</button>
          </React.Fragment>
        );
    }                         
}

export default MerchControl;



// else {
//   currentlyVisibleState = 
//       <ShoppingCart shoppingCart={this.state.masterShoppingCart} />;
  
//   buttonText = "Add to shopping cart";
// }