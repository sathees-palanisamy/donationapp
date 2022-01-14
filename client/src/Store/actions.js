import axios from "axios"

export const insertResponseSuccess = (res) => {
  return {
      type: 'DONATION_ADD_SUCEESS',
      data: res
  }
}

export const insertResponseError = (res) => {
  return {
      type: 'DONATION_ADD_FAIL'
  }
}

export const insertInPorgress = (res) => {
  return {
      type: 'DONATION_ADD_PROGRESS'
  }
}

export const listResponseSuccess = (res) => {
  return {
      type: 'DONATION_LIST_SUCEESS',
      donationList: [...res]
  }
}

export const listResponseError = (res) => {
  return {
      type: 'DONATION_LIST_FAIL'
  }
}

export const listInPorgress = (res) => {
  return {
      type: 'DONATION_LIST_PROGRESS'
  }
}

export const deleteResponseSuccess = (res) => {
  return {
      type: 'DONATION_DELETE_SUCEESS',
      donationList: [...res]
  }
}

export const deleteResponseError = (res) => {
  return {
      type: 'DONATION_DELETE_FAIL'
  }
}

export const deleteInPorgress = (res) => {
  return {
      type: 'DONATION_DELETE_PROGRESS'
  }
}

export const addDonation = (userId, donationAmt, tipAmount) => async dispatch => {


  await axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: 'http://localhost:7000/newdonation/',
    data: {
      id: new Date().getTime(),
    userid: userId,
    amount: donationAmt,
    tip: tipAmount,
      }
    })
    .then(function (response) {
      if (response.status === 200) {
          dispatch(insertResponseSuccess(response.data));
      }
      else {
          dispatch(insertResponseError());
      }
  })
  .catch(function (error) {
      dispatch(insertResponseError());
  });

}


export const listDonation = () => async dispatch => {


  await axios({
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    url: 'http://localhost:7000/donationlist/',
    })
    .then(function (response) {
      console.log('response.status:' + response.status);
      console.log('response.data:' + response.data[0]);
      if (response.status === 200) {
          dispatch(listResponseSuccess(response.data));
      }
      else {
          dispatch(listResponseError());
      }
  })
  .catch(function (error) {
      dispatch(listResponseError());
  });

}

export const deleteDonation = (id) => async dispatch => {


  await axios({
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    url: 'http://localhost:7000/deletedonation',
    data: {
      id: id
      }
    })
    .then(function (response) {
      console.log('response.status:' + response.status);
      console.log('response.data:' + response.data[0]);
      if (response.status === 200) {
          dispatch(deleteResponseSuccess(response.data));
      }
      else {
          dispatch(deleteResponseError());
      }
  })
  .catch(function (error) {
      dispatch(deleteResponseError());
  });

}