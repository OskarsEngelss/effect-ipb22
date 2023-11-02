import "./Spinner.css";

function LoadingSpinner(props) {
    return (
      <div className="spinner-container">
        <p>Loading {props.componentToLoad}:</p>
        <div className="loading-spinner">
        </div>
      </div>
    );
}

export default LoadingSpinner;