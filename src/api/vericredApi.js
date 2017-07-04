import fetch from 'isomorphic-fetch';

const objectToQuery = (value, elemOfArray = null) => {
  if (!(value instanceof Object)) {
    return encodeURIComponent(value);
  }
  let query = [];
  for (let p in value) {
    if (value.hasOwnProperty(p)) {
      let prop = value[p];
      if (prop instanceof Array) {
        let array = prop.map( (val, index) => {
          return objectToQuery(val, encodeURIComponent(p));
        });
        query.push(array.join('&'));
        console.log();
      } else {
        let result;
        if (elemOfArray) {
          result = `${elemOfArray}[][${encodeURIComponent(p)}]=${objectToQuery(prop)}`;
        } else {
          result = `${encodeURIComponent(p)}=${objectToQuery(prop)}`
        }
        query.push(result)
      }
    }
  }
  return query.join("&");
}

class VericredApi {
  static findPlans(params) {
    params = Object.assign(
      {
        market: 'individual',
        page: 1,
        per_page: 20,
        sort: 'premium:asc'
      },
      params
    )
    delete params.plans;
    let url = `https://api.vericred.com/plans?${objectToQuery(params)}`,
        options = {
          method: 'GET',
          headers: {
            'Vericred-Api-Key': '9c903d79078ed4ecad41451fd564ed72'
          }
        };
    return fetch(url, options).then(resonse => resonse.json())
  }
}

export default VericredApi;
