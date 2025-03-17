import Swal from "sweetalert2";

const VisaApplicationCard = ({ setFilteredVisas, filteredVisas, visa }) => {
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
  } = visa;

  // console.log("visa app data:-", filteredVisas);

  const handleDelete = (id) => {
    // console.log("Del ID:--", id);

    // del with swal start

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://visa-server-one.vercel.app/visa/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // update the loaded coffee state
              const remainingVisa = filteredVisas.filter(
                (visa) => visa._id !== _id
              );
              setFilteredVisas(remainingVisa);
            }
          });
      }
    });

    // end del
  };

  return (
    <div>
      {/* 1 card */}
      <div className="card bg-stone-100 w-96 shadow-sm">
        <div className="mt-3 ml-10">
          <h2 className="card-title text-3xl items-center flex justify-center">
            {name}
          </h2>
        </div>
        <figure className="px-10 pt-8">
          <img src={photo} alt="county photo" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <ul className="grid grid-cols-1 space-y-2">
            <li className="flex justify-end space-x-20 p-2">
              <h2 className="font-semibold ">Visa Type:</h2>
              <p className="text-right">{visaType}</p>
            </li>

            <li className="flex justify-end space-x-20 p-2">
              <h2 className="font-semibold ">Processing Time:</h2>
              <p className="text-right">{processingTime}</p>
            </li>
            <li className="flex justify-end space-x-20 p-2">
              <h2 className="font-semibold ">Fee:</h2>
              <p className="text-right">${fee}</p>
            </li>
            <li className="flex justify-end space-x-20 p-2">
              <h2 className="font-semibold">Validity:</h2>
              <p className="text-right">{validity}</p>
            </li>
            <li className="flex justify-end space-x-20 p-2">
              <h2 className="font-semibold">Application Method:</h2>
              <p className="text-right">{applicationMethod}</p>
            </li>
          </ul>
          <div className="card-actions mt-4">
            <button
              on
              onClick={() => {
                handleDelete(_id);
              }}
              className="btn
             bg-stone-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaApplicationCard;
