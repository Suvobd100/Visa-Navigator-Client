import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SingleVisaCard = ({ visa }) => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  // console.log("single visa:--", user.metadata.lastSignInTime);
  const lastLogintime = user.metadata.lastSignInTime;

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
  //   const handelApply = (id) => {
  //     console.log(id);
  //   };

  const {
    _id,
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

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  const [date, setDate] = useState(formattedDate);

  const handleUpdateVisa = (e) => {
    e.preventDefault();
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const ApplyDate = e.target.ApplyDate.value;
    const visafee = e.target.visafee.value;
    const email = e.target.email.value;

    // const photo = e.target.photo.value;

    const updateClientVisaInfo = {
      fname,
      lname,
      ApplyDate,
      visafee,
      lastLogintime,
      email,
    };
    console.log(updateClientVisaInfo);

    // send data to the server and database
    fetch(`https://visa-nav-app-server.vercel.app/visa/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateClientVisaInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          console.log("successfully updated");
          Swal.fire({
            title: "Success!",
            position: "top-start", // Set position to top-left corner
            text: "Visa Info updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          //   e.target.reset();
        }
      });
  };

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
                  onClick={() => {
                    document.getElementById("my_modal_5").showModal();
                  }}
                >
                  Apply
                </button>
                <dialog
                  id="my_modal_5"
                  className="modal modal-bottom sm:modal-middle"
                >
                  <div className="modal-box">
                    <div className="flex justify-center">
                      <span>{email}</span>
                    </div>

                    <div className="modal-action">
                      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleUpdateVisa} className="card-body">
                          {/* form first row */}
                          <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control flex-1">
                              <label className="label">
                                <span className="label-text">Email</span>
                              </label>
                              <input
                                type="text"
                                name="email"
                                defaultValue={email}
                                placeholder="email"
                                className="input input-bordered"
                                required
                              />
                            </div>
                            <div className="form-control flex-1">
                              <label className="label">
                                <span className="label-text">First Name</span>
                              </label>
                              <input
                                type="text"
                                name="fname"
                                // defaultValue={chef}
                                placeholder="First Name"
                                className="input input-bordered"
                                required
                              />
                            </div>
                          </div>
                          {/* form second row */}
                          <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control flex-1">
                              <label className="label">
                                <span className="label-text">Last Name</span>
                              </label>
                              <input
                                type="text"
                                name="lname"
                                // defaultValue={supplier}
                                placeholder="Last Name"
                                className="input input-bordered"
                                required
                              />
                            </div>
                            <div className="form-control flex-1">
                              <label className="label">
                                <span className="label-text">Applied Date</span>
                              </label>
                              <input
                                type="date"
                                name="ApplyDate"
                                value={date} // Controlled input
                                onChange={(e) => setDate(e.target.value)} // Update state on change
                                className="input input-bordered"
                                required
                              />
                            </div>
                          </div>
                          {/* form third row */}
                          <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control flex-1">
                              <label className="label">
                                <span className="label-text">Visa Fee</span>
                              </label>
                              <input
                                type="text"
                                name="visafee"
                                defaultValue={fee}
                                placeholder="Visa Fee"
                                className="input input-bordered"
                                required
                              />
                            </div>
                          </div>

                          <div className="form-control mt-6 mx-auto">
                            <button type="submit" className="btn btn-primary">
                              Apply
                            </button>
                          </div>
                          {/* Close Button */}
                          <div className="block mx-auto">
                            <button
                              onClick={() =>
                                document.getElementById("my_modal_5").close()
                              }
                              className="btn btn-error"
                            >
                              Close
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="block mx-auto">
                        {/* <Link to={`/lesson`} className="btn">
                          Back to Lesson
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </dialog>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleVisaCard;
