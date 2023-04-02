import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Api from './Api';

const Home = () => {
  const [inp, setInp] = React.useState('')
  const [data,setData] = React.useState('')

function handleSearch(){
  setData(inp)
}
  return (
    <div>
      <h1 className='heading' style={{color:"Blue"}}>SnapShot</h1>
      <div className='search' >
        <input onChange={(e)=>{setInp(e.target.value)}} className='search-input' type="text" placeholder={`search image`} />
        <button onClick={handleSearch} className='search-button' style={{backgroundColor:"green"}} ><FontAwesomeIcon  icon={faSearch} /></button>
      </div>
      <div className='quick'>
        <Link to='/Earth' ><button style={{backgroundColor:"green"}}>Earth</button></Link>
        <Link to='/sun'><button style={{backgroundColor:"green"}}>sun</button></Link>
        <Link to='/nature' ><button style={{backgroundColor:"green"}}>Nature</button></Link>
        <Link to='/Food'><button style={{backgroundColor:"green"}}>Food</button></Link>
      </div>
      <h3 className='search-heading'>{data} Images</h3>
      <Api pro = {data}/>
    </div>
  );
};

export default Home;