import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Oops! Something went wrong...
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          We apologize for the inconvenience. The page you are looking for may
          be temporarily unavailable or may no longer exist.
        </p>
        <button
          onClick={handleButton}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:bg-red-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
