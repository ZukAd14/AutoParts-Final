import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsRequest } from '../../../redux/productsRedux';
import Product from '../../features/Product/Product';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const Home = () => {
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products.data);
 const [currentPage, setCurrentPage] = useState(1);

 useEffect(() => {
  dispatch(getProductsRequest());
 }, [dispatch]);

 const productsPerPage = 12;
 const totalPages = Math.ceil(products.length / productsPerPage);

 const handlePageChange = (page) => {
  setCurrentPage(page);
 };

 const renderProducts = () => {
  const rows = [];
    const productsOnPage = products.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );

    const row = (
      <div key={currentPage} className="row">
        {productsOnPage.map((product) => (
          <div key={product.id} className="col-md-3">
            <Product product={product} />
          </div>
        ))}
      </div>
    );

    rows.push(row);
    return rows;
};

  return (
    <div>
      <h1 className='ms-auto text-center text-light my-4 py-2'>Our Products</h1>
      {renderProducts()}
      <nav className='d-flex justify-content-center align-items-center mt-4'>
        <ul className='pagination mb-4'>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => handlePageChange(currentPage - 1)}>
            <button className="page-link" disabled={currentPage === 1}>
              <FaAngleLeft />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => (
            <li key={i} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`} >
              <button className='page-link' onClick={() => handlePageChange(i + 1)} style={{background: '#4caf50', border: '#4caf50'} }>
                {i + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <button className="page-link" disabled={currentPage === totalPages}>
              <FaAngleRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;