import axios from 'axios';

var Team = none;

export function fetchTeams() {
    return function(dispatch) {
      dispatch({type: fetchTeams})
  
      axios.get('https://statsapi.web.nhl.com/api/v1/teams/${Team}')
        .then((response) => {
          dispatch({
            type: "FETCH_TEAMS_FULFILLED",
            payload: response.data
          })
        })
        .catch((err) => {
          dispatch({
            type: "FETCH_TEAMS_REJECTED",
            payload: err
          })
        })
    }
  }