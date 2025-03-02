const LatestVisasSection = () => {
  return (
    <div className="grid grid-cols-3 space-y-10 ">
      {/* 1 card */}
      <div className="card bg-stone-100 w-96 shadow-sm">
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
            <li className="flex  space-x-16 py-2">
              <h2 className="font-semibold ">Visa Type:</h2>
              <p>Student Visa</p>
            </li>

            <li className="flex py-2">
              <h2 className="font-semibold ">Processing Time:</h2>
              <p>4-6 weeks</p>
            </li>
            <li className="flex space-x-12 py-2">
              <h2 className="font-semibold ">Fee:</h2>
              <p>$420</p>
            </li>
            <li className="flex space-x-28 py-2">
              <h2 className="font-semibold">Validity:</h2>
              <p>Duration of Study</p>
            </li>
            <li className="flex space-x-8 py-2">
              <h2 className="font-semibold">Application Method:</h2>
              <p>Online Application</p>
            </li>
          </ul>
          <div className="card-actions mt-4">
            <button className="btn  bg-stone-300">See Details</button>
          </div>
        </div>
      </div>
      {/* 2 card */}
      <div className="card bg-stone-100 w-96 shadow-sm">
        <div className="mt-3 ml-10">
          <h2 className="card-title text-3xl">Canada</h2>
        </div>
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/6781pChk/ca.png"
            alt="Canada"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <ul>
            <li className="flex  space-x-16 py-2">
              <h2 className="font-semibold">Visa Type:</h2>
              <p>Work Permit</p>
            </li>

            <li className="flex py-2">
              <h2 className="font-semibold">Processing Time:</h2>
              <p>8-12 weeks</p>
            </li>
            <li className="flex space-x-12 py-2">
              <h2 className="font-semibold">Fee:</h2>
              <p>$150</p>
            </li>
            <li className="flex space-x-28 py-2">
              <h2 className="font-semibold">Validity:</h2>
              <p>1-2 years</p>
            </li>
            <li className="flex space-x-8 py-2">
              <h2 className="font-semibold">Application Method:</h2>
              <p>Online Application</p>
            </li>
          </ul>
          <div className="card-actions mt-4">
            <button className="btn  bg-stone-300">See Details</button>
          </div>
        </div>
      </div>
      {/* 3 card */}
      <div className="card bg-stone-100 w-96 shadow-sm">
        <div className="mt-3 ml-10">
          <h2 className="card-title text-3xl">France</h2>
        </div>
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/8LtyXHhG/fr.png"
            alt="France"
            className="rounded-xl h-40"
          />
        </figure>
        <div className="card-body items-center text-center">
          <ul>
            <li className="flex  space-x-16 py-2">
              <h2 className="font-semibold">Visa Type:</h2>
              <p>Schengen Visa</p>
            </li>

            <li className="flex py-2">
              <h2 className="font-semibold">Processing Time:</h2>
              <p>10-15 business day</p>
            </li>
            <li className="flex space-x-12 py-2">
              <h2 className="font-semibold">Fee:</h2>
              <p>€80</p>
            </li>
            <li className="flex space-x-28 py-2">
              <h2 className="font-semibold">Validity:</h2>
              <p>90 days within 180 days</p>
            </li>
            <li className="flex space-x-8 py-2">
              <h2 className="font-semibold">Application Method:</h2>
              <p>Embassy Submission</p>
            </li>
          </ul>
          <div className="card-actions mt-4">
            <button className="btn  bg-stone-300">See Details</button>
          </div>
        </div>
      </div>
      {/* 4 card-gb */}
      <div className="card bg-stone-100 w-96 shadow-sm">
        <div className="mt-3 ml-10">
          <h2 className="card-title text-3xl">United Kingdom</h2>
        </div>
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/3mJTwLzX/gb.png"
            alt="uk"
            className="rounded-xl h-40"
          />
        </figure>
        <div className="card-body items-center text-center">
          <ul>
            <li className="flex  space-x-16 py-2">
              <h2 className="font-semibold">Visa Type:</h2>
              <p>Business Visa</p>
            </li>

            <li className="flex mr-4 py-1">
              <h2 className="font-semibold">Processing Time:</h2>
              <p>3 weeks</p>
            </li>
            <li className="flex space-x-14 py-2">
              <h2 className="font-semibold">Fee:</h2>
              <p>£200</p>
            </li>
            <li className="flex space-x-15 py-2">
              <h2 className="font-semibold">Validity:</h2>
              <p>6 months</p>
            </li>
            <li className="flex space-x-10 py-2">
              <h2 className="font-semibold">Application Method:</h2>
              <p>Online or Visa Center</p>
            </li>
          </ul>
          <div className="card-actions mt-4">
            <button className="btn  bg-stone-300">See Details</button>
          </div>
        </div>
      </div>
      {/* 5 card-jp */}
      <div className="card bg-stone-100 w-96 shadow-sm">
        <div className="mt-3 ml-10">
          <h2 className="card-title text-3xl">Japan</h2>
        </div>
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/bRFfLrtc/jp.png"
            alt="Japan"
            className="rounded-xl h-40"
          />
        </figure>
        <div className="card-body items-center text-center">
          <ul>
            <li className="flex  space-x-16 py-2">
              <h2 className="font-semibold">Visa Type:</h2>
              <p>Tourist Visa</p>
            </li>

            <li className="flex py-2">
              <h2 className="font-semibold">Processing Time:</h2>
              <p>90 days</p>
            </li>
            <li className="flex space-x-16 py-2">
              <h2 className="font-semibold">Fee:</h2>
              <p>$50</p>
            </li>
            <li className="flex space-x-16 py-2">
              <h2 className="font-semibold">Validity:</h2>
              <p>90 days</p>
            </li>
            <li className="flex  space-x-24 py-2 text-start">
              <h2 className="font-semibold">Application Method:</h2>
              <p>Online or Embassy Submission</p>
            </li>
          </ul>
          <div className="card-actions mt-2">
            <button className="btn  bg-stone-300">See Details</button>
          </div>
        </div>
      </div>

      {/* 6 card-pk */}

      <div className="card bg-stone-100 w-96 h-[93%] shadow-sm">
        <div className="mt-3 ml-10">
          <h2 className="card-title text-3xl">Pakistan</h2>
        </div>
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co.com/gZhGtbCr/pk.png"
            alt="Pakistan"
            className="rounded-xl h-40"
          />
        </figure>
        <div className="card-body items-center text-center">
          <ul>
            <li className="flex  space-x-16 py-2">
              <h2 className="font-semibold">Visa Type:</h2>
              <p>Tourist Visa</p>
            </li>

            <li className="flex space-x-16 py-2">
              <h2 className="font-semibold">Processing Time:</h2>
              <p>7-10 business days</p>
            </li>
            <li className="flex space-x-16 py-2">
              <h2 className="font-semibold">Fee:</h2>
              <p>$60*</p>
            </li>
            <li className="flex space-x-16 py-2">
              <h2 className="font-semibold">Validity:</h2>
              <p>30 days</p>
            </li>
            <li className="flex text-start space-x-24 py-2">
              <h2 className="font-semibold ">Application Method:</h2>
              <p>Online or Embassy Submission</p>
            </li>
          </ul>
          <div className="card-actions mt-2">
            <button className="btn bg-stone-300">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestVisasSection;
