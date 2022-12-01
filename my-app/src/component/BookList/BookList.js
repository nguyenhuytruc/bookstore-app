import React, { useEffect, useState } from "react";
import Helper from './../../services/helper';
import BookSevice from "../../services/bookSevice";
import Spinner from "../Spinner/Spinner";

function BookList() {
  const [state, setState] = useState({
    loading: false,
    books: [],
    errorMessage: "",
  });

  useEffect(() => {
    try {
      setState({ ...state, loading: true });
      async function getData() {
        let resBook = await BookSevice.getBook();
        setState({
          ...state,
          loading: false,
          books: resBook.data,
        });
      }
      getData();
    } catch (error) {
      setState({
        ...state,
        errorMessage: error.massage,
      });
    }
  }, []);

  const { loading, books } = state;
  return (
    <>
      <section className="create-book">
        <div className="container">
          <div className="d-flex align-items-center">
            <h3 className="me-2">Book Manager</h3>
            <button className="btn btn-primary btn-sm">
              <i className="fa fa-circle-plus me-2"> New</i>
            </button>
          </div>
          <p className="fst-italic">
            Duis nisi ex laborum in adipisicing veniam eu cupidatat nostrud
            incididunt cillum. Amet sint sit proident officia ut quis nisi
            officia sunt laborum duis. Ipsum culpa labore voluptate ex amet et
            laborum non eu in.
          </p>
          <div className="d-flex w-25">
            <input type="text" className="form-control"></input>
            <button className="btn btn-outline-secondary btn-sm ms-2">
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="my-2">
        <div className="container">
          <div className="row">
            {loading ? (
              <Spinner />
            ) : (
              books.map((book) => (
                <div className="col-md-4 mb-3" key={book.id}>
                  <div className="card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-md-3">
                          <img
                            className="rounded photo-md"
                            src={book.photo}
                            alt=""
                          ></img>
                        </div>
                        <div className="col-md-8">
                          <ul className="list-group">
                            <li className="list-group-item">
                              Book Name:{" "}
                              <span className="fw-bolder">{book.bookName}</span>
                            </li>
                            <li className="list-group-item">
                              Price:{" "}
                              <span className="fw-bolder">{Helper.formatCurrency(book.price)}</span>
                            </li>
                            <li className="list-group-item">
                              Author:{" "}
                              <span className="fw-bolder">{book.author}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-1">
                          <div className="d-flex flex-column align-items-center">
                            <button className="btn btn-warning btn-sm">
                              <i className="fa fa-eye"></i>
                            </button>
                            <button className="btn btn-primary btn-sm my-3">
                              <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-danger btn-sm">
                              <i className="fa fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default BookList;
