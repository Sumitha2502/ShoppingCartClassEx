

function Card({myFunction}) {
    let data=10
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button onClick={myFunction(data)} className="btn btn-primary">
          Go somewhere
        </button>
      </div>
    </div>
  );
}

export default Card;
