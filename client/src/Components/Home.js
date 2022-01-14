
import Nav from './Nav';

function Home(props){
  return (
    <div className='container' data-test="component-home">
      <h1 data-test="home-heading">Donation Application</h1>

      <img src="./needy.jpg" className="homeImg" data-test="home-img"  />

    </div>
  )
}


export default Home;