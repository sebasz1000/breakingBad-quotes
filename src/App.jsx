import { useCounter, useFetch } from "./hooks";
import { Quote, Loader } from "./components";
function App() {
  const URL = "https://www.breakingbadapi.com/api";
  const { counter, onIncrement, onDecrease } = useCounter(1);
  const { quote, author, isLoading, hasError } = useFetch(
    `${URL}/quotes/${counter}`
  );
  const handleNext = (e) => onIncrement();
  const handlePrevious = (e) => onDecrease();

  return (
    <div className="App vh-100 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <header>
            <h1 className="text-center">Breaking Bad quote</h1>
          </header>
          {!isLoading ? (
            <Quote number={counter} quote={quote} author={author} />
          ) : (
            <Loader />
          )}
        </div>
        <div className="row justify-content-center mt-5">
          <button
            className="btn btn-primary w-25"
            onClick={handlePrevious}
            disabled={isLoading}
          >
            Previous Quote
          </button>
          <button
            className="btn btn-primary mx-3 w-25"
            onClick={handleNext}
            disabled={isLoading}
          >
            Next Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
