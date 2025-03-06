import { Link } from "react-router";

const VisaCard = ({ visasData}) => {
//   console.log(visasData);
  const {
    _id,
    photo,
    name,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    age,
    fee,
    validity,
    applicationMethod,
    email,
    createAt,
  } = visasData;
//   console.log(visasData.name, visasData._id);
  return (
    <div>
      <div className="card bg-stone-100 w-full shadow-sm">
        <div className="mt-3 ml-10 flex justify-center ">
          <h2 className="card-title text-3xl">{name}</h2>
        </div>
        <figure className="px-10 pt-4">
          <img src={photo} alt={name} className="rounded-xl w-[70%] " />
        </figure>
        <div className="card-body items-center px-4">
          <ul>
            <li className="flex  space-x-16 py-2">
              <h2 className="font-semibold ">Visa Type:</h2>
              <p className="text-right">{visaType}</p>
            </li>

            <li className="grid grid-cols-2 mt-4 space-x-4">
              <h2 className="font-semibold text-left">Processing Time:</h2>
              <p className="text-right">{processingTime}</p>
            </li>
            <li className="grid grid-cols-2 mt-4 space-x-16 ">
              <h2 className="font-semibold text-left ">Fee:</h2>
              <p className="text-right">${fee}</p>
            </li>
            <li className="grid grid-cols-2 mt-4 space-x-16 ">
              <h2 className="font-semibold text-left">Validity:</h2>
              <p className="text-right">{validity}</p>
            </li>
            <li className="grid grid-cols-2 mt-4 space-x-16 ">
              <h2 className="font-semibold text-left">Application Method:</h2>
              <p className="text-right">{applicationMethod}</p>
            </li>
          </ul>
          <div className="card-actions mt-4">
          {/* to={`/priv/lesson/${lessondata.categoryId}`} */}
            {/* <Link to={`/visa/${_id}`}> */}
            <Link to={`/priv/visa/${_id}`}>
            {/* <Link to={`/visa/${email}`}> */}
              <button className="btn  bg-stone-300">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
