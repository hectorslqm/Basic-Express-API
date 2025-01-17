# Basic Express API

This is a simple API with no database. It demonstrates how an API works using Express.js.

## How to Run This Express Server

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd Basic-Express-API
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node api.js
    ```

4. Open your browser and go to the following URL:
    ```bash
    http://localhost:3000/
    ```

5. You should see the following message:
    ```bash
    Authentication API
    ```

## API Endpoints

- `GET /` - Returns a welcome message.
- `POST /` - Creates a new resource.
- `PUT /:id` - Updates a resource with the specified ID.
- `PATCH /:id` - Partially updates a resource with the specified ID.
- `DELETE /:id` - Deletes a resource with the specified ID.

> in case you want to use post body  you will require to enable the middleware
```bash
app.use(express.json());
```