import http from 'k6/http';

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 5,
      timeUnit: '2s', // 5 iterations every 2 seconds, i.e. 2.5 req/s
      duration: '10s',
      preAllocatedVUs: 100, // how large the initial pool of VUs would be
      maxVUs: 200, // if the preAllocatedVUs are not enough, we can initialize more
    },
  },
};

export default function () {
  http.get('http://localhost:3000/users');
}