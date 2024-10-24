import React from 'react';

const DynamicProductPage = ({params, searchParams}) => {
    // console.log(params?.dynamicProductId);
    
    return (
        <div>
            <h2> this is dynamic product id = {params?.dynamicProductId} ,,, search params = {searchParams?.category} </h2>
        </div>
    );
};

export default DynamicProductPage;