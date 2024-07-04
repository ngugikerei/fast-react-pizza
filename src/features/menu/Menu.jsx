import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

export default function Menu() {
  //react router hook that connect the data to the element,
  //specified in main route declaration pge
  const menu = useLoaderData();

  return (
    <ul>
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
