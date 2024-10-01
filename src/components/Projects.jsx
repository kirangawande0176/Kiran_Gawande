export default function Projects(){
    return(
        <div
  className="carousel slide"
  id="carouselExample"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        alt="..."
        className="d-block w-100"
        src="..."
      />
    </div>
    <div className="carousel-item">
      <img
        alt="..."
        className="d-block w-100"
        src="..."
      />
    </div>
    <div className="carousel-item">
      <img
        alt="..."
        className="d-block w-100"
        src="..."
      />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    data-bs-slide="prev"
    data-bs-target="#carouselExample"
    type="button"
  >
    <span
      aria-hidden="true"
      className="carousel-control-prev-icon"
    />
    <span className="visually-hidden">
      Previous
    </span>
  </button>
  <button
    className="carousel-control-next"
    data-bs-slide="next"
    data-bs-target="#carouselExample"
    type="button"
  >
    <span
      aria-hidden="true"
      className="carousel-control-next-icon"
    />
    <span className="visually-hidden">
      Next
    </span>
  </button>
</div>
    )
}