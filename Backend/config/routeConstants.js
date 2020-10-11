module.exports = {
  FRONTEND_URL: "http://localhost:3000",

  //CustomerRoutes
  GET_CUSTOMER_PROFILE: "/profile",
  GET_ALL_CUSTOMER_PROFILES: "/allcustomers",
  POST_CUSTOMER_SIGNUP: "/signup",
  UPDATE_CUSTOMER_PROFILE: "/profile",

  //images
  GET_IMAGE_USER_PROFILE: "/userProfile",
  POST_IMAGE_USER_PROFILE: "/userProfile",
  UPDATE_USER_IMAGE: "/userProfile",

  POST_CUSTOMER_REVIEW: "/review",
  POST_IMAGE_MENU_ITEM: "/dishImage",
  POST_IMAGE_EVENT: "/eventImage",

  //Login Routes
  POST_LOGIN: "/login",

  //RestaurantRoutes
  // GET_RESTAURANT_BY_ID:'/restaurant/id/',
  GET_RESTAURANT_BY_LOCATION: "/restaurant/location",
  GET_ALL_RESTAURANTS: "/restaurants",
  GET_RESTAURANT_PROFILE: "restaurant/profile",

  POST_RESTAURANT_SIGNUP: "/signup",
  GET_RESTAURANT_PROFILE: "/profile",
  GET_RESTAURANT_MENU: "/menu",
  GET_RESTAURANT_BY_ID: "/id/",
  GET_RESTAURANT_BY_LOCATION: "/location",
  GET_RESTAURANT_BY_DISH: "/dish",
  GET_RESTAURANT_REVIEWS: "/reviews",
  GET_RESTAURANT_SEARCH: "/search",

  UPDATE_RESTAURANT_PROFILE: "/profile",
  POST_RESTAURANT_MENU: "/menu",
  POST_MENU_ITEM: "/menuItem",
  UPDATE_MENU_ITEM: "/menuItem",
  POST_RESTAURANT_MENU: "/menu",

  //Reviews
  GET_REVIEWS_BY_RESTAURANT: "/restaurant",
  GET_REVIEWS_ID_RESTAURANT: "/restaurantID",
  GET_REVIEWS_BY_CUSTOMER: "/customer",
  POST_REVIEW_CUSTOMER: "/customer",
  UPDATE_REVIEW_CUSTOMER: "/customer",

  //Orders
  GET_ORDER_BY_ID: "/id",
  GET_ORDER_BY_CUSTOMER: "/customerId",
  GET_ORDER_BY_RESTAURANT: "/restaurantId",
  POST_ORDER: "/order",
  UPDATE_ORDER: "/order",

  //Events
  GET_EVENTS_BY_NAME: "/name",
  GET_ALL_EVENTS: "/events",
  GET_EVENT_DETAILS: "/event",
  GET_EVENT_BY_RESTAURANT: "/restaurantId",
  GET_CUSTOMERS_BY_EVENTS: "/allCustomers",
  GET_EVENTS_BY_CUSTOMER: "/customerId",
  POST_EVENT: "/event",
  UPDATE_EVENT: "/event",
  POST_EVENT_REGISTRATION: "/register",

  GET_REGISTRATIONS_CUSTOMER: "/customerRegistrations",
  GET_REGISTRATIONS_EVENT: "/eventRegistrations",

  /**Response status codes */
  RES_UNKNOWN_ERROR: 502,
  RES_BAD_REQUEST: 400,
  RES_NOT_FOUND: 404,
  RES_DUPLICATE_RESOURCE: 409,
  RES_SUCCESS: 200,
  RES_INTERNAL_SERVER_ERROR: 500,
};
