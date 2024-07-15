/* eslint-disable react/prop-types */
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function MenuItem({ pizza }) {
  // eslint-disable-next-line no-unused-vars
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className='flex gap-4 py-2 '>
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'opacity-50 grayscale' :''}`}/>
      <div className='flex-col flex-grow pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic text-stone-500 capitalize'>{ingredients.join(', ')}</p>

       
         
       <div className='mt-auto text-sm flex items-center justify-between'>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className='text-sm uppercase 
          font-medium text-stone-500'>Sold out</p>}

         {!soldOut &&  <Button type='small' >Add to Cart</Button>}
        </div>
       </div>

       
      
    </li>
  );
}

export default MenuItem;
