import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  // firebase
  const email = user?.email;
  const createAt = user?.metadata?.creationTime;

  const handleAddVisa = (e) => {
    e.preventDefault();

    // Extract form values
    // const fname = e.target.fname.value;
    // const lname = e.target.lname.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const visaType = e.target.visaType.value;
    const processingTime = e.target.taste.value;
    const description = e.target.details.value;
    const age = e.target.age.value;
    const fee = e.target.fee.value;
    const validity = e.target.validity.value;
    const applicationMethod = e.target.Application_method.value;

    // Extract required documents (checkboxes)
    const requiredDocuments = [];
    if (e.target.valid_pp.checked) requiredDocuments.push("Valid Passport");
    if (e.target.visa_app.checked) requiredDocuments.push("Visa Application");
    if (e.target.recent_pp.checked)
      requiredDocuments.push("Recent Passport Size Photo");

    // Create newVisa object
    const newVisa = {
      // fname,
      // lname,
      photo,
      name,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      age: parseInt(age), // Convert to number
      fee: parseFloat(fee), // Convert to number
      validity,
      applicationMethod,
      email,
      createAt,
    };

    // console.log("Add visa form value:---", newVisa);

    // send data to the server and database
    fetch("https://visa-server-one.vercel.app/visa", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // console.log("successfully added");
          Swal.fire({
            title: "Success!",
            text: "Visa added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="lg:w-3/4 mx-auto">
      <div className="text-center p-10">
        <h1 className="text-5xl font-bold text-stone-500">
          Add Visa Information
        </h1>
        <p className="py-6 text-stone-400">
          This page allows users to input and submit details about a visa,
          including country, visa type, processing time, required documents, and
          more. It ensures a seamless and organized way to manage visa-related
          data for future reference or processing.
        </p>
      </div>
      <div className="card bg-stone-200 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddVisa} className="card-body">
          {/* form first row */}

          {/* 0 row Fname Lname */}

          {/* <div className="flex flex-col lg:flex-row gap-[22%]">
            
            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">First Name</span>
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          
            <div className="form-control flex-1 mb-4">
              <label className="label font-semibold">
                <span className="label-text">Last Name</span>
              </label>
              <div>
                <div className="w-full">
                  <input
                    type="text"
                    name="lname"
                    placeholder="Last Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* 0 end */}

          {/* 1st row */}
          <div className="flex flex-col lg:flex-row gap-[22%]">
            {/* Photo url */}
            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">Photo URL</span>
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* country name */}
            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">Country Name</span>
              </label>
              <div>
                <div className="w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Counter Name"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* form second row */}
          <div className="flex flex-col lg:flex-row gap-[22%] mt-8">
            {/* Visa Type Dropdown */}
            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">Visa Type</span>
              </label>
              <select
                name="visaType"
                className="mt-1 block w-[50%] p-2 border rounded-md"
              >
                <option value="">Select visa type</option>
                <option value="Tourist visa">Tourist visa</option>
                <option value="Student visa">Student visa</option>
                <option value="Official visa">Official visa</option>
              </select>
            </div>

            <div className="form-control flex-1 ">
              <label className="label font-semibold">
                <span className="label-text">Processing Time</span>
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="taste"
                  placeholder="Processing Time"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          {/* form third row */}
          <div className="flex flex-col lg:flex-row gap-[22%] mt-8">
            <div className="form-control flex-1">
              <fieldset className="fieldset p-4 bg-base-100 border border-base-300 rounded-box w-full sm:w-64 items-center">
                <legend className="fieldset-legend">Required Documents</legend>
                {/* check box 1 */}
                <label className="fieldset-label flex items-center space-x-2 ">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox"
                    name="valid_pp"
                  />
                  <span>Valid Passport</span>
                </label>
                {/* check box 2 */}
                <label className="fieldset-label flex items-center space-x-2 ">
                  <input type="checkbox" className="checkbox" name="visa_app" />
                  <span>Visa Application</span>
                </label>

                {/* check box 3 */}
                <label className="fieldset-label flex items-center space-x-2 ">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="recent_pp"
                  />
                  <span>Recent Passport Size Photo</span>
                </label>
              </fieldset>
              {/* check box end */}
            </div>

            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">Description</span>
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="details"
                  placeholder="Visa Description"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>

          {/* 4th row */}
          <div className="flex flex-col lg:flex-row gap-[22%] mt-8">
            {/* Age */}
            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">Age</span>
              </label>
              <div className="w-full">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* Fee*/}
            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">Fee</span>
              </label>
              <div className="w-full">
                <input
                  type="number"
                  name="fee"
                  placeholder="Visa Fee"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>
          {/* 5th row */}
          <div className="flex flex-col lg:flex-row gap-[22%] mt-8">
            {/* Validity */}
            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">Validity</span>
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="validity"
                  placeholder="Validity"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* Fee*/}
            <div className="form-control flex-1">
              <label className="label font-semibold">
                <span className="label-text">Application Method</span>
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="Application_method"
                  placeholder="Application Method"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-control mt-6 ">
            <button className="btn btn-wide mx-auto block bg-stone-400 text-white">
              Add Visa
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
