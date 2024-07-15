import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

export default function Menu() {
  //react router hook that connect the data to the element,
  //specified in main route declaration pge
  const menu = useLoaderData();

  return (
    <ul className='divide-y divide-stone-200 px-2'>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

//loader function  gets data from service ...API
export async function loader() {
  const menu = await getMenu();
  return menu;
}
