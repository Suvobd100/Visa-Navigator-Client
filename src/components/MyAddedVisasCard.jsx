import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyAddedVisasCard = ({ vData, setVisasData, visasData }) => {
  const { user } = useContext(AuthContext);
  const lastLogInTime = user.metadata.lastSignInTime;
  console.log(user.metadata.lastSignInTime);
  console.log(user);

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
  } = vData;

  // Check if the logged-in user is authorized
  const isUserAuthorized = user && user.email === email;

  // Handle visa update
  const handleUpdateVisa = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const visaType = e.target.visaType.value;
    const processingTime = e.target.processingTime.value;
    const fee = e.target.fee.value;
    const validity = e.target.validity.value;

    const updateClientVisaInfo = {
      name,
      photo,
      visaType,
      processingTime,
      fee,
      validity,
      lastLogInTime,
      email
    };

    // Update data in the database
    // fetch(`http://localhost:5000/visa`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(updateClientVisaInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.modifiedCount) {
    //       console.log("successfully updated by email");
    //       Swal.fire({
    //         title: "Success!",
    //         position: "top-start",
    //         text: "Visa Info updated successfully",
    //         icon: "success",
    //         confirmButtonText: "Ok",
    //       });


    fetch(`http://localhost:5000/visas`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateClientVisaInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('patch data res from back:---',data);
        if (data.modifiedCount > 0) {
          console.log("successfully updated by email");
          Swal.fire({
            title: "Success!",
            position: "top-start",
            text: "Visa Info updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });


          // Fetch updated data from the database
          fetch("http://localhost:5000/visas")
            .then((res) => res.json())
            .then((updatedData) => {
              setVisasData(updatedData); // Update the parent state with the new data
              
              // Close the modal after successful update
              document.getElementById("my_modal_5").close();
            })
            .catch((error) => {
              // console.error("Error fetching updated data:", error);
              <p>{error}</p>
            });
        }
      })
      .catch((error) => {
        console.error("Error updating visa:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to update visa info",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  // Use useEffect to log changes in visasData (optional)
  useEffect(() => {
    console.log("Updated visasData:", vData);
  }, [vData]);

  return (
    <div>
      <div className="card bg-stone-100 w-full shadow-sm">
        <div className="mt-3 ml-10 flex justify-center ">
          <h2 className="card-title text-3xl">{name}</h2>
        </div>
        <figure className="px-10 pt-4">
          <img src={photo} alt={photo} className="rounded-xl w-[70%] " />
        </figure>
        <div className="card-body items-center px-4">
          <ul>
            <li className="flex space-x-16 py-2">
              <h2 className="font-semibold ">Visa Type:</h2>
              <p className="text-right">{visaType}</p>
            </li>
            <li className="grid grid-cols-2 mt-4 space-x-4">
              <h2 className="font-semibold text-left">Processing Time:</h2>
              <p className="text-right">{processingTime}</p>
            </li>
            <li className="grid grid-cols-2 mt-4 space-x-16 ">
              <h2 className="font-semibold text-left">Application Method:</h2>
              <p className="text-right">{applicationMethod}</p>
            </li>
          </ul>
          <div className="card-actions mt-4 flex justify-center items-center">
            <button
              className="btn bg-stone-300"
              disabled={!isUserAuthorized}
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Update
            </button>

            {/* Update Modal */}
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
                      <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Country Name</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            placeholder="Country Name"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Country image</span>
                          </label>
                          <input
                            type="text"
                            name="photo"
                            defaultValue={photo}
                            placeholder="Country image"
                            className="input input-bordered"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Visa Type</span>
                          </label>
                          <input
                            type="text"
                            name="visaType"
                            defaultValue={visaType}
                            placeholder="Visa Type"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Processing Time</span>
                          </label>
                          <input
                            type="text"
                            name="processingTime"
                            defaultValue={processingTime}
                            placeholder="Processing Time"
                            className="input input-bordered"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Visa Fee</span>
                          </label>
                          <input
                            type="text"
                            name="fee"
                            defaultValue={fee}
                            placeholder="Visa Fee"
                            className="input input-bordered"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                          <label className="label">
                            <span className="label-text">Validity</span>
                          </label>
                          <input
                            type="text"
                            name="validity"
                            defaultValue={validity}
                            placeholder="Validity"
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
                </div>
              </div>
            </dialog>

            <button className="btn bg-stone-300" disabled={!isUserAuthorized}>
              Delete
            </button>
          </div>
          <p className="textarea-xs">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default MyAddedVisasCard;
