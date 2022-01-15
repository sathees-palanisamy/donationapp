import propTypes from 'prop-types';

function DonationPresentation(props){

  return   props.amount?<div data-test="donation-presentation" className="Card" key={props.id}>
  <div className="Card--body" data-test="Card--body">
    <h4 className="Card--body-title" data-test="Card--body-title">
      Donation Amount:{props.amount}
    </h4>
    <p className="Card--body-tip" data-test="Card--body-tip">Tip :{props.tip}</p>
    <p className="Card--body-userid" data-test="Card--body-userid">User ID :{props.userid}</p>
  </div>
  <button className='Card__button' data-test='Card__button' onClick={() => props.deleteDonation(props.id)}>
   Delete
</button>
</div>:null

}

DonationPresentation.propTypes ={
  id: propTypes.number.isRequired,
  amount: propTypes.number.isRequired,
  tip: propTypes.string.isRequired,
  userid: propTypes.string.isRequired,
  deleteDonation:propTypes.func

}

export default DonationPresentation;