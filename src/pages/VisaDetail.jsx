import React from 'react'
import { useParams } from 'react-router';

const VisaDetail = () => {
    const { id } = useParams();
  return (
    <div>VisaDetail: {id}</div>
  )
}

export default VisaDetail