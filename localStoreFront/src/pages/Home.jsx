import { useContext } from 'react'
import { InvtryCtx } from '../context/inventoryContext';
import Cards from '../components/Cards';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  const { invtry, error, isLoading } = useContext(InvtryCtx);
  console.log(invtry);


  if (isLoading) return <div><h1>loading...</h1></div>;
  if (error) return <div><h1>{error}</h1></div>;
  return (
    <>
      <header>
        <h1>Agrotech</h1>
        <h3 onClick={()=> navigate('Login')} className='link-login'>acceso usuarios</h3>
      </header>
      <section className='layout'>
        {
          invtry.map(invtry => <Cards invtry={invtry} key={invtry.id} />)
        }
      </section>
    </>
  )
}

export default Home;