const axios = require('axios');

// To get the decision response from decision check microservices 
// where it provide service decision with details.

exports.check = function (req, res, next) {
  const formData = req.body;

  let data = {
    id: formData.id,
    userid: formData.userid,
    amount: formData.amount,
    tip: formData.tip,
  }
  
    axios({
      method: 'post',
      url: 'http://localhost:5001/newdonation/',
      data: data,
      headers: {'Content-Type': 'application/json; charset=utf-8' }
      })
      .then(response => {
      
      res.status(200).send({});    
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send({apiErrorMessage: 'Internal Server Error'})
    });


}

exports.list = function (req, res, next) {
  const formData = req.body;

  let data = {
    id: formData.id,
    userid: formData.userid,
    amount: formData.amount,
    tip: formData.tip,
  }
  
    axios({
      method: 'get',
      url: 'http://localhost:5001/donationlist/',
      headers: {'Content-Type': 'application/json; charset=utf-8' }
      })
      .then(response => {
      
      res.status(200).send([...response.data]);    
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send({apiErrorMessage: 'Internal Server Error'})
    });


}

exports.remove = function (req, res, next) {
  const formData = req.body;
  
    axios({
      method: 'delete',
      url: `http://localhost:5001/deletedonation/${formData.id}`,
      headers: {'Content-Type': 'application/json; charset=utf-8' }
      })
      .then(response => {
      
      res.status(200).send({});    
    })
    .catch((error) => {
        console.log(error)
        res.status(500).send({apiErrorMessage: 'Internal Server Error'})
    });


}