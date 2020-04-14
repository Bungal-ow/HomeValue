import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '1s', target: 20 },
        { duration: '45s', target: 100 },
       
      ],
};
let zipcode = Math.floor(Math.random() * (99999 - 10000) + 10000);

export default function() {
  
  let res = http.get(`http://localhost:4000/api/home/${zipcode}`);
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 200,
  });
  sleep(0.01)
}