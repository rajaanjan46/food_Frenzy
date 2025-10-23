# FoodFrenzy Frontend

This is a minimal React frontend (Vite) which calls the backend REST endpoints exposed at `/api/*`.

Quick start (Windows cmd.exe):

```cmd
cd \path\to\FoodFrenzy-main\frontend
npm install
npm run dev
```

The Vite dev server proxies `/api` to `http://localhost:8080` by default. Make sure the Spring Boot app is running on port 8080.
