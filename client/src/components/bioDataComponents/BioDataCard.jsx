import { Link } from "react-router-dom";

const BioDataCard = ({ bioData }) => {
  const { _id, biodataType, name, photoURL, age, occupation, bioDataId } =
    bioData || {};
  return (
    <Link
      to={`/bioDataDetails/${_id}`}
      className="hover:scale-[1.03] transition-all"
    >
      <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-xl ">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full "
            alt="Testimonial avatar"
            src={photoURL}
          />
        </div>

        <h2 className="mt-2 text-lg font-semibold text-gray-800  md:mt-0 overflow-hidden text-ellipsis whitespace-nowrap">
          Name: {name}
        </h2>

        <p className="mt-2 text-sm text-gray-600 ">Biodata Id: {bioDataId}</p>
        <p className="mt-2 text-sm text-gray-600 ">
          Biodata Type: {biodataType}
        </p>
        <p className="mt-2 text-sm text-gray-600 ">Age: {age}</p>
        <p className="mt-2 text-sm text-gray-600 ">Occupation: {occupation}</p>

        <div className=" mt-4">
          <Link to={`/bioDataDetails/${_id}`}>
            <button className="bg-blue-700 hover:bg-gray-800 px-3 py-1 text-white rounded-md text-xs md:text-sm">
              View Profile
            </button>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BioDataCard;
