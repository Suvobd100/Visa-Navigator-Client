
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="">
      <div className="min-h-screen bg-stone-400 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800">404</h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto my-4"></div>
          <h2 className="text-3xl font-semibold mb-4">Oops! Page not found</h2>
          <p className="text-gray-600 mb-8">
            The page you `&apos;`re looking for doesn `&apos;` t exist or has
            been moved.
          </p>
          <Link
            to="/"
            className="bg-black hover:bg-stone-400 text-white font-bold py-3 px-6 rounded-lg 
        transition duration-300 ease-in-out transform hover:scale-105"
          >
            Go Home
          </Link>
        </div>
        <div className="mt-12">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gray-300 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
