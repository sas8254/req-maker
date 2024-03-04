# Req-Maker

`req-maker` is a simple Node.js application designed to keep instances on free hosting services active by sending regular requests to a predefined API endpoint. This prevents the hosting service from spinning down the instance due to inactivity.

## How it works

The `req-maker` app continuously sends HTTP requests to a specified API endpoint at regular intervals. This keeps the server instance active and prevents it from being shut down by the hosting service.

## Prerequisites

- Node.js installed on your machine

### Prerequisites

- Node.js

### Installation

1. Clone the repo

   ```bash
   https://github.com/sas8254/req-maker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd req-maker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Add urls in env file saperated by , for example:

   ```env
      links=https://abc/xyz,https://efg/xy
   ```

2. Start the `req-maker` app:

   ```bash
   node app.js
   ```

   The app will start sending requests to the specified API endpoint at the configured interval.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** Use this tool responsibly and in accordance with the terms of service of the hosting provider. Unauthorized usage may violate terms and conditions.
