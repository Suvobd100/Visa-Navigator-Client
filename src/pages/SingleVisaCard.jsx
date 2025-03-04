import React from "react";

const SingleVisaCard = ({ visa }) => {
  // {
  //     "_id": "67c6c27601057f05fc3124f4",
  //     "photo": "https://i.ibb.co.com/gZhGtbCr/pk.png",
  //     "name": "UK",
  //     "visaType": "Student visa",
  //     "processingTime": "1 week",
  //     "requiredDocuments": [
  //         "Valid Passport",
  //         "Visa Application"
  //     ],
  //     "description": "study",
  //     "age": 28,
  //     "fee": 500,
  //     "validity": "6 months",
  //     "applicationMethod": "online",
  //     "email": "kajol@khala.com",
  //     "createAt": "Tue, 04 Mar 2025 08:51:47 GMT"
  // }
  const {
    email,
    name,
    visaType,
    processingTime,
    description,
    age,
    fee,
    validity,
    applicationMethod,
    createAt,
  } = visa;
  return (
    <div>
      <h4 className="text-center font-bold text-xl mb-4">Visa Details</h4>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white border border-gray-200">
          {/* Header Row */}
          <thead className="bg-gray-100">
            <tr className="grid md:grid-cols-12 grid-cols-2 p-2">
              <th className="p-2 text-left">Name</th>
              <th className="p-2  text-end">Visa Type</th>
              <th className="p-2  text-end">Email</th>
              <th className="p-2  text-end">Age</th>
              <th className="p-2  text-end">Fee</th>
              <th className="p-2  text-end">Validity</th>
              <th className="p-2  text-end">Application Method</th>
              <th className="p-2  text-end">Description</th>
              <th className="p-2  text-end">Processing Time</th>
              <th className="p-2  text-end">Created At</th>
              <th className="p-2  text-end">Action</th>
            </tr>
          </thead>
          {/* Data Row */}
          <tbody>
            <tr className="grid md:grid-cols-12 grid-cols-2 p-2 border-t items-center">
              <td className="p-2 ">{name}</td>
              <td className="p-2 text-end">{visaType}</td>
              <td className="p-2">{email}</td>
              <td className="p-2 text-end">{age}</td>
              <td className="p-2  text-end">{fee}</td>
              <td className="p-2 text-end">{validity}</td>
              <td className="p-2  text-end">{applicationMethod}</td>
              <td className="p-2 text-end">{description}</td>
              <td className="p-2  text-end">{processingTime}</td>
              <td className="p-2 text-[12px] text-end">{createAt}</td>
              <td className="p-2  text-end">
                <button
                  className="cursor-pointer p-1 rounded-md bg-green-300 shadow-md text-center"
                  // onClick={() => handelEdit(_id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default SingleVisaCard;
