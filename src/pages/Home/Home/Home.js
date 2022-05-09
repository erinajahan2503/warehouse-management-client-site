import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
// import PageTitle from '../../Shared/PageTitle/PageTitle';

const Home = () => {
    return (
        <div>
            {/* <PageTitle title="Home"></PageTitle> */}
            <Banner></Banner>
            <InventoryItems></InventoryItems>
            <Footer></Footer>
        </div>
    );
};

export default Home;