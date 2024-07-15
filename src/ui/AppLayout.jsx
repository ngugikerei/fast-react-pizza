import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

export default function AppLayout() {
  //use navigation hook checks the applicat;ion state and returns idle, isloading or submitting
  // eslint-disable-next-line no-unused-vars
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
 

  return (
    <div className=" grid-rows-[auto_1fr_auto] grid h-screen">
      {isLoading && <Loader />}
      <Header />


    <div className='overflow-scroll'>  
      <main className=' max-w-3xl mx-auto'>
        <Outlet />
      </main>
    </div>

      <CartOverview />
    </div>
  );
}

