import React from "react"; 
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
    return (
        <React.Fragment>
            <hr />
            {props.merchlist.map((merch) => (
                <Merch
                    names={merch.names}
                    price={merch.price}
                    quantity={merch.quantity}
                    picture={merch.picture}
                    key={merch.id}
                />
            ))}
        </React.Fragment>
    );
}

MerchList.propTypes = {
    merchlist: PropTypes.array
};

export default MerchList;