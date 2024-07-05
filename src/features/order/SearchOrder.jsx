import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
  const [orderId, setOrderId] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!orderId) return;
    navigate(`/order/${orderId}`);
    setOrderId('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order Number"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
    </form>
  );
}
