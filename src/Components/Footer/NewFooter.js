import React from "react";
import "./Footer.css";

function NewFooter() {
  return (
    // <div>
    <footer
      class="footer text-center text-lg-start text-white"
      style={{ backgroundColor: "hsl(210deg 8% 15%)", color: "GrayText" }}
    >
      {/* <!-- Grid container --> */}
      <div class="container p-4">
        {/* <!--Grid row--> */}
        <div class="row mt-4">
          {/* <!--Grid column--> */}
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">About Us</h5>

            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-book fa-fw fa-sm me-2"></i>Bestsellers
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-book fa-fw fa-sm me-2"></i>Best Products
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-user-edit fa-fw fa-sm me-2"></i>Our authors
                </a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Execution of the contract</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Supply
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-backspace fa-fw fa-sm me-2"></i>Returns
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <i class="far fa-file-alt fa-fw fa-sm me-2"></i>Regulations
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <i class="far fa-file-alt fa-fw fa-sm me-2"></i>Privacy policy
                </a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Publishing house</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-white">
                  The BookStore
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  123 Street
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  05765 NY
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-briefcase fa-fw fa-sm me-2"></i>Send us a
                  book
                </a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}

          {/* <!--Grid column--> */}
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Write to us</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-at fa-fw fa-sm me-2"></i>Help in purchasing
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-shipping-fast fa-fw fa-sm me-2"></i>Check the
                  order status
                </a>
              </li>
              <li>
                <a href="#!" class="text-white">
                  <i class="fas fa-envelope fa-fw fa-sm me-2"></i>Join the
                  newsletter
                </a>
              </li>
            </ul>
          </div>
          {/* <!--Grid column--> */}
        </div>
        {/* <!--Grid row--> */}
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div class="text-center p-3" style={{ backgroundColor: "black" }}>
        © 2022 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">
          Buy & Sell
        </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // </div>
  );
}

export default NewFooter;
