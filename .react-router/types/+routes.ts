// Generated by React Router

import "react-router"

declare module "react-router" {
  interface Register {
    pages: Pages
    routeFiles: RouteFiles
  }
}

type Pages = {
  "/": {
    params: {};
  };
  "/products": {
    params: {};
  };
  "/products/leaderboards": {
    params: {};
  };
  "/products/leaderboards/yearly/:year": {
    params: {
      "year": string;
    };
  };
  "/products/leaderboards/monthly/:year/:month": {
    params: {
      "year": string;
      "month": string;
    };
  };
  "/products/leaderboards/weekly/:year/:week": {
    params: {
      "year": string;
      "week": string;
    };
  };
  "/products/leaderboards/daily/:year/:month/:day": {
    params: {
      "year": string;
      "month": string;
      "day": string;
    };
  };
  "/products/leaderboards/:period": {
    params: {
      "period": string;
    };
  };
  "/products/categories": {
    params: {};
  };
  "/products/categories/:category": {
    params: {
      "category": string;
    };
  };
  "/products/search": {
    params: {};
  };
  "/products/submit": {
    params: {};
  };
  "/products/promote": {
    params: {};
  };
};

type RouteFiles = {
  "root.tsx": {
    id: "root";
    page: "/" | "/products" | "/products/leaderboards" | "/products/leaderboards/yearly/:year" | "/products/leaderboards/monthly/:year/:month" | "/products/leaderboards/weekly/:year/:week" | "/products/leaderboards/daily/:year/:month/:day" | "/products/leaderboards/:period" | "/products/categories" | "/products/categories/:category" | "/products/search" | "/products/submit" | "/products/promote";
  };
  "common/pages/home-page.tsx": {
    id: "common/pages/home-page";
    page: "/";
  };
  "features/products/pages/products-page.tsx": {
    id: "features/products/pages/products-page";
    page: "/products";
  };
  "features/products/pages/leaderboard-page.tsx": {
    id: "features/products/pages/leaderboard-page";
    page: "/products/leaderboards";
  };
  "features/products/pages/yearly-leaderboard-page.tsx": {
    id: "features/products/pages/yearly-leaderboard-page";
    page: "/products/leaderboards/yearly/:year";
  };
  "features/products/pages/monthly-leaderboard-page.tsx": {
    id: "features/products/pages/monthly-leaderboard-page";
    page: "/products/leaderboards/monthly/:year/:month";
  };
  "features/products/pages/weekly-leaderboard-page.tsx": {
    id: "features/products/pages/weekly-leaderboard-page";
    page: "/products/leaderboards/weekly/:year/:week";
  };
  "features/products/pages/daily-leaderboard-page.tsx": {
    id: "features/products/pages/daily-leaderboard-page";
    page: "/products/leaderboards/daily/:year/:month/:day";
  };
  "features/products/pages/leaderboard-redirection-page.tsx": {
    id: "features/products/pages/leaderboard-redirection-page";
    page: "/products/leaderboards/:period";
  };
  "features/products/pages/categories-page.tsx": {
    id: "features/products/pages/categories-page";
    page: "/products/categories";
  };
  "features/products/pages/category-page.tsx": {
    id: "features/products/pages/category-page";
    page: "/products/categories/:category";
  };
  "features/products/pages/search-page.tsx": {
    id: "features/products/pages/search-page";
    page: "/products/search";
  };
  "features/products/pages/submit-page.tsx": {
    id: "features/products/pages/submit-page";
    page: "/products/submit";
  };
  "features/products/pages/promote-page.tsx": {
    id: "features/products/pages/promote-page";
    page: "/products/promote";
  };
};