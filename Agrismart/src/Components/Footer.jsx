function Footer() {
  return (
    <footer className=" mt-5 bg-dark text-white position-absolute bottom-0 w-100 p-5">
      <div className="container text-center">
        <div className="d-flex justify-content-center">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              AgriSmart is dedicated to providing innovative solutions for
              modern agriculture, leveraging technology to empower farmers and
              enhance productivity.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: info@agrismart.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 AgriSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
