import React from 'react';
import { useParams } from 'react-router-dom';
function AccountDetailPage() {
  const { id } = useParams();
  return <div>AccountDetailPage -{id}</div>;
}

export default AccountDetailPage;
