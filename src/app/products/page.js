import React from 'react';

const ProductsPage = async () => {

    const res = await fetch("http://localhost:5000/shoes", {
        cache : "force-cache"   // eti default vabe set kora thake , er fole next.js build time data ke cache kore rakhe , 
    });
    const data = await res?.json()   


    return (
        <div>
            <h2 className='text-center text-xl font-semibold my-10 ' > This is Products Page </h2>
            <div className='grid grid-cols-3 gap-10 w-[60%] mx-auto mb-10 ' >
                {
                    data?.map(item => <div className='border rounded-lg mb-2 p-10 ' key={item.id}>
                        <h2 className='text-xl font-semibold' > {item.title} </h2>
                        <p> {item.description} </p>
                    </div> )
                }
            </div>
        </div>
    );
};

export default ProductsPage;