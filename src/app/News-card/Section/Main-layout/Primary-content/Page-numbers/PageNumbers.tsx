import "./PageNumbers.scss";

function PageNumbers() {
    return (
        <>
            <div className="page-numbers">
                <div className="previous">&lt; Previous</div>
                <div className="number">1</div>
                <div className="number">2</div>
                <div className="next">Next &gt;</div>
            </div>
        </>
  )
}

export default PageNumbers;
