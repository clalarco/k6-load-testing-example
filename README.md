# Sample project using Express and k6 for load testing

Author [Claudio Alarcon](https://github.com/clalarco)

## Features

- Simple Express app, with a rate limiter
- Uses k6 for load testing and verify rate limiter

## Requirements

This project was created using the following software versions:
- node.js version 20. [Installation instructions](https://nodejs.org/en/download/package-manager)
- k6 version v0.52.0. [Installation instructions](https://grafana.com/docs/k6/latest/set-up/install-k6/)

## Usage

1. Start the server: In a terminal, type:

       cd app
       npm run start

3. Start k6. In a separate terminal, type:

       k6 run loadtest.js

    Once executed, check the results for `http_req_failed` to verify the rate limiter values.

### Modify rate limiter

At `app/app.js` modify the variable `limiter`. See [express-rate-limit documentation](https://www.npmjs.com/package/express-rate-limit) for details.


### Modify requests per second in load test

At `loadtest.js`, modify the parameters `rate` and `timeUnit`. See [constant arrival rate execution](https://k6.io/docs/using-k6/scenarios/executors/constant-arrival-rate/) for more details.
