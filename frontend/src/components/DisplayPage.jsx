import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DisplayPage = () => {

  const { id } = useParams();

  const [linkData, setLinkData] = useState(null);

  const fetchLinkData = async () => {
    const res = await fetch(`http://localhost:5000/link/getbyid/${id}`);
    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setLinkData(data);
    }
  };

  useEffect(() => {
    fetchLinkData();
  }, []);

  return (
    <div>
      <>
  <section className="bg-main bg-color hero-section">
    <div className="container">
      <div className="row mb-5 ">
        <div className="d-flex flex-column align-items-start justify-content-center col-xl-6 xol-lg-6 col-md-12 col-12 order-1 order-lg-0 text-md-start text-center">
          <h1 className=" text-capitalize fw-bolder text-white">
            Tittle
          </h1>
          <p className="mt-3 mb-5  para-width text-light-grey ">
          DEscription-  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravi.
          </p>
          <div className="text-center w-100 text-md-start">
            <button
              className="btn btn-primary px-5 py-2 "
              data-bs-offset="0,5"
              data-bs-placement="top"
              data-bs-title="Get Best Services"
              data-bs-toggle="tooltip"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="col-xl-6 xol-lg-6 col-md-12 col-12 order-0 order-lg-1 hero-image--section ">
          <div className="text-md-end text-center mb-5">
            <video
              autoPlay=""
              className="hero-video--section"
              loop=""
              muted=""
              src="hero.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    <div className="custom-shape-divider-bottom-1684208460">
      <svg
        data-name="Layer 1"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="shape-fill"
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        />
      </svg>
    </div>
  </section>
  {/*hero section end */}
  {/* body part  */}
  <section>
    <div>
      <h2 className="text-capitalize mt-5 ms-1 p-3 pt-3 text-center ">
        Technical Equipments{" "}
      </h2>
    </div>
    <div className="container">
      <div className="row mt-4">
        <div className=" col-md-4 col-6">
          <div className="card shadow">
            <div className="card-body">
              
              <h3 className="text-capitalize text-center  ">Instagram</h3>
              <div className="text-center">
                <button className="btn btn-primary mt-2  py-2">Visit</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 col-6">
          <div className="card shadow">
            <div className="card-body">
              <img className="w-75 d-block m-auto" src="film-camera.gif" />
              <h3 className="text-capitalize text-center  ">Github</h3>
              <div className="text-center">
                <button className="btn btn-primary mt-2  py-2">Visit</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 col-6">
          <div className="card shadow">
            <div className="card-body">
             
              <h3 className="text-capitalize text-center  ">Youtube</h3>
              <div className="text-center">
                <button className="btn btn-primary   text-center mt-2 py-2">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 col-6 mt-4">
          <div className="card shadow">
            <div className="card-body">
              
              <h3 className="text-capitalize text-center  ">Telegram</h3>
              <div className="text-center">
                <button className="btn btn-primary   text-center mt-2 py-2">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 col-6 mt-4">
          <div className="card shadow">
            <div className="card-body">
              
              <h3 className="text-capitalize text-center  ">Facebook</h3>
              <div className="text-center">
                <button className="btn btn-primary   text-center mt-2 py-2">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-4 col-6 mt-4">
          <div className="card shadow">
            <div className="card-body">
              <img className="w-75 d-block m-auto" src="film-camera.gif" />
              <h3 className="text-capitalize text-center  ">Linkedinn</h3>
              <div className="text-center">
                <button className="btn btn-primary   text-center mt-2 py-2">
                  Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}

export default DisplayPage