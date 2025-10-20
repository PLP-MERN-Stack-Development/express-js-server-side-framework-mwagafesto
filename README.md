 Week 2 — Express.js RESTful API (MongoDB/Mongoose)

A production-style Express API wired to MongoDB via Mongoose. Includes routing, validation, auth (API key), error handling, filtering, search, sorting, and pagination.

 Quick Start

```bash
npm install
cp .env.example .env
# Edit .env -> MONGODB_URI=mongodb://127.0.0.1:27017/week2_products (or Atlas URI)
npm run seed     # optional: seed sample products
npm start        # http://localhost:${PORT:-3000}
```

 .env

```
PORT=3000
API_KEY=changeme-dev-key
# Local:
MONGODB_URI=mongodb://127.0.0.1:27017/week2_products
# Atlas example:
# MONGODB_URI="mongodb+srv://<user>:<pass>@<cluster-url>/week2_products?retryWrites=true&w=majority"
```

 Endpoints

- `GET /api/products` — list (supports `q`, `category`, `minPrice`, `maxPrice`, `sort`, `order`, `page`, `limit`, `fields`)
- `GET /api/products/:id`
- `POST /api/products` *(protected: header `x-api-key`)*
- `PUT /api/products/:id` *(protected)*
- `DELETE /api/products/:id` *(protected)*

 Examples

```bash
# List with search + pagination
curl "http://localhost:3000/api/products?q=hat&minPrice=1000&sort=price&order=asc&page=1&limit=5&fields=name,price"

# Create
curl -X POST http://localhost:3000/api/products   -H "Content-Type: application/json" -H "x-api-key: changeme-dev-key"   -d '{"name":"Bottle","price":1800,"category":"home","stock":5}'

# Update
curl -X PUT "http://localhost:3000/api/products/<id>"   -H "Content-Type: application/json" -H "x-api-key: changeme-dev-key"   -d '{"price":1500}'
```

 Notes
- Uses a Mongoose text index on `name` and `description` to power `q` search (falls back to regex if index not built yet).
- Centralized error handling with helpful HTTP responses.
- Swap auth to JWT or session easily later.
