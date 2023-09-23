const FOOD_DATA = [
  {
    title: "Burgers",
    items: [
      {
        id: 1,
        name: "Classic All-American Cheeseburger",
        imageUrl:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1998&q=80",
        price: 10,
      },
      {
        id: 2,
        name: "Ham and Egg Cheeseburger",
        imageUrl:
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1922&q=80",
        price: 9,
      },
      {
        id: 3,
        name: "Artisan Burger",
        imageUrl:
          "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 12,
      },
      {
        id: 4,
        name: "Barbecue Burger",
        imageUrl:
          "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 11,
      },
      {
        id: 5,
        name: "Double Cheeseburger with Caramelized Onions",
        imageUrl:
          "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 15,
      },
      {
        id: 6,
        name: "Spicy Burger",
        imageUrl:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 14,
      },
      {
        id: 7,
        name: "Cheeseburger with more Cheese and Burger",
        imageUrl:
          "https://images.unsplash.com/photo-1564362411991-472954b39f56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2004&q=80",
        price: 20,
      },
    ],
  },
  {
    title: "Pizza",
    items: [
      {
        id: 8,
        name: "The Neapolitan",
        imageUrl:
          "https://images.unsplash.com/photo-1627626775846-122b778965ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 12,
      },
      {
        id: 9,
        name: "Classic Cheese",
        imageUrl:
          "https://images.unsplash.com/photo-1548369937-47519962c11a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 12,
      },
      {
        id: 10,
        name: "Pepperoni",
        imageUrl:
          "https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 12,
      },
      {
        id: 11,
        name: "Vegetable",
        imageUrl:
          "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2002&q=80",
        price: 15,
      },
      {
        id: 12,
        name: "Beloved Pineapple",
        imageUrl:
          "https://images.unsplash.com/photo-1562835155-a7c2a225e97d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 14,
      },
      {
        id: 13,
        name: "Tomato",
        imageUrl:
          "https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80",
        price: 14,
      },
      {
        id: 14,
        name: "Eggeroni",
        imageUrl:
          "https://images.unsplash.com/photo-1605591099585-087b3d54cd45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80",
        price: 14,
      },
      {
        id: 15,
        name: "Artisan",
        imageUrl:
          "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 18,
      },
      {
        id: 16,
        name: "Farmer and Fungi on the Sea",
        imageUrl:
          "https://images.unsplash.com/photo-1560433684-6dc95b4c00c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1984&q=80",
        price: 20,
      },
    ],
  },
  {
    title: "Salad",
    items: [
      {
        id: 17,
        name: "Chickpea",
        imageUrl:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 10,
      },
      {
        id: 18,
        name: "Tomato",
        imageUrl:
          "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
        price: 10,
      },
      {
        id: 19,
        name: "Lemon",
        imageUrl:
          "https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
        price: 10,
      },
      {
        id: 20,
        name: "Tofu",
        imageUrl:
          "https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 10,
      },
      {
        id: 21,
        name: "Shrimp",
        imageUrl:
          "https://images.unsplash.com/photo-1551248429-40975aa4de74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80",
        price: 15,
      },
      {
        id: 22,
        name: "Chicken and Egg",
        imageUrl:
          "https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
        price: 14,
      },
      {
        id: 23,
        name: "Caesar",
        imageUrl:
          "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        price: 12,
      },
    ],
  },
];
