const VisaCard = ({ visasData, setVisasData }) => {
    console.log(visasData);
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
  console.log(visasData.name,visasData._id);
  return <div>VisaCard : {visasData.name}</div>;
};

export default VisaCard;
