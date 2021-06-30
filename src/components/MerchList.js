import React from "react"; 
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
    return (
         <React.Fragment>
            <hr />
            {props.merchList.map((merch) => 
                <Merch
                    names={merch.name}
                    price={merch.price}
                    quantity={merch.quantity}
                    picture={<img src={`${merch.picture}`} alt="item"/>}
                    
                    key={merch.id}
                />
            )}
         </React.Fragment>
    );
}

MerchList.propTypes = {
    merchlist: PropTypes.array
};

export default MerchList;