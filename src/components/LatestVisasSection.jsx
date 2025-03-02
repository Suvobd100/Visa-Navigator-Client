const LatestVisasSection = () => {
  return (
    <div className="grid grid-cols-3">
      {/* 1 card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="mt-3 ml-10">
          <h2 className="card-title text-3xl">Australia</h2>
         </div>
        <figure className="px-10 pt-8">
          <img
            src="https://i.ibb.co.com/Tq1LtHW4/au.png"
            alt="Australia"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <ul>
            <li className="flex  space-x-16">
              <h2 className="font-semibold">Visa Type:</h2>
              <p>Student Visa</p>
            </li>

            <li className="flex">
              <h2 className="font-semibold">Processing Time:</h2>
              <p>4-6 weeks</p>
            </li>
            <li className="flex space-x-12">
              <h2 className="font-semibold">Fee:</h2>
              <p>$420</p>
            </li>
            <li className="flex space-x-28">
              <h2 className="font-semibold">Validity:</h2>
              <p>Duration of Study</p>
            </li>
            <li className="flex space-x-8">
              <h2 className="font-semibold">Application Method:</h2>
              <p>Online Application</p>
            </li>
          </ul>
          <div className="card-actions">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
      {/* 2 card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/6781pChk/ca.png"
            alt="Canada"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <ul>
            <li className="flex  space-x-16">
              <h2 className="font-semibold">Visa Type:</h2>
              <p>Student Visa</p>
            </li>

            <li className="flex">
              <h2 className="font-semibold">Processing Time:</h2>
              <p>4-6 weeks</p>
            </li>
            <li className="flex space-x-12">
              <h2 className="font-semibold">Fee:</h2>
              <p>$420</p>
            </li>
            <li className="flex space-x-28">
              <h2 className="font-semibold">Validity:</h2>
              <p>Duration of Study</p>
            </li>
            <li className="flex space-x-8">
              <h2 className="font-semibold">Application Method:</h2>
              <p>Online Application</p>
            </li>
          </ul>
          <div className="card-actions">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
      {/* 3 card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/8LtyXHhG/fr.png"
            alt="France"
            className="France"
          />
        </figure>
        <div className="card-body items-center text-center">
          <ul>
            <li className="flex  space-x-16">
              <h2 className="font-semibold">Visa Type:</h2>
              <p>Student Visa</p>
            </li>

            <li className="flex">
              <h2 className="font-semibold">Processing Time:</h2>
              <p>4-6 weeks</p>
            </li>
            <li className="flex space-x-12">
              <h2 className="font-semibold">Fee:</h2>
              <p>$420</p>
            </li>
            <li className="flex space-x-28">
              <h2 className="font-semibold">Validity:</h2>
              <p>Duration of Study</p>
            </li>
            <li className="flex space-x-8">
              <h2 className="font-semibold">Application Method:</h2>
              <p>Online Application</p>
            </li>
          </ul>
          <div className="card-actions">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVisasSection;
