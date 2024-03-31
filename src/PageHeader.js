import React from "react";

export default function PageHeader({ title, curpage }) {
  return (
    <div className="pageheader-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pageheader-content text-center">
              <h2>{title}</h2>
              <nav className="breadcrumb justify-content-center ">
                <ol className="breadcrumb justify-content-center ">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Shop</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {curpage}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
