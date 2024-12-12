import {
  aguacate,
  alPastor,
  cebolla,
  cebollaEnEscabeche,
  camaron,
  cilantro,
  cremaMexicana,
  habanero,
  jalapenos,
  lechuga,
  mole,
  nopales,
  picoDeGallo,
  pina,
  polloAsado,
  pescado,
  quesoFresco,
  quesoOaxaca,
  quesoVegano,
  repollo,
  salsaRoja,
  salsaVerde,
  setas,
  tomate,
  tostada,
  tortillaDeHarina,
  tortillaDeMaiz
} from "@/assets";

const multipleOptionLayers = ['vegetables', 'garnishes'];

const layerChoices = {
  base: [
    {
      spanish: 'Tortilla de Maiz',
      english: 'Corn tortilla'
    },
    {
      spanish: 'Tortilla de Harina',
      english: 'Wheat tortilla'
    },
    {
      spanish: 'Tostada',
      english: 'Crispy Tortilla',
      info: 'A crunchy alternative, typically a flat, fried or baked corn tortilla.'
    },
  ],
  protein: [
    {
      spanish: 'Al Pastor',
      english: 'Marinated Pork',
      info: 'Traditional spit-grilled pork, marinated with chillies and pineapple.'
    },
    {
      spanish: 'Pollo Asado',
      english: 'Grilled Chicken',
      info: 'Chicken marinated in citrus and spices, then grilled.'
    },
    {
      spanish: 'Pescado',
      english: 'Fish'
    },
    {
      spanish: 'Camarón',
      english: 'Shrimp'
    },
    {
      spanish: 'Nopales',
      english: 'Cactus',
      info: 'Tender cactus paddles, grilled or sautéed.'
    },
    {
      spanish: 'Setas',
      english: 'Mushrooms',
    },
  ],
  vegetables: [
    {
      spanish: 'Lechuga',
      english: 'Lettuce'
    },
    {
      spanish: 'Repollo',
      english: 'Cabbage'
    },
    {
      spanish: 'Tomate',
      english: 'Tomato'
    },
    {
      spanish: 'Piña',
      english: 'Pineapple'
    },
    {
      spanish: 'Aguacate',
      english: 'Avocado'
    },
    {
      spanish: 'Ninguno',
      english: 'None'
    },
  ],
  dairy: [
    {
      spanish: 'Queso Fresco',
      english: 'Fresh Cheese',
      info: 'A crumbly, mild cheese.'
    },
    {
      spanish: 'Queso Oaxaca',
      english: 'Oaxaca Cheese',
      info: 'A stringy, melty cheese similar to mozzarella that originates from the state of Oaxaca.'
    },
    {
      spanish: 'Crema Mexicana',
      english: 'Mexican Cream',
      info: 'A rich, tangy cream that\'s slightly thinner than sour cream.'
    },
    {
      spanish: 'Queso Vegano',
      english: 'Vegan Cheese'
    },
    {
      spanish: 'Ninguno',
      english: 'None'
    },
  ],
  garnishes: [
    {
      spanish: 'Cilantro',
      english: 'Coriander'
    },
    {
      spanish: 'Cebolla',
      english: 'Onion'
    },
    {
      spanish: 'Jalapenos',
      english: 'Jalapeños'
    },
    {
      spanish: 'Cebolla en Escabeche',
      english: 'Pickled Onion',
    },
    {
      spanish: 'Pico de Gallo',
      english: 'Fresh Salsa',
      info: 'A mix of diced tomatoes, onions, cilantro, and lime juice.'
    },
    {
      spanish: 'Ninguno',
      english: 'None'
    },
  ],
  sauce: [
    {
      spanish: 'Salsa Verde',
      english: 'Green Salsa',
      info: 'A tangy salsa made with tomatillos, green chillies, and coriander.'
    },
    {
      spanish: 'Salsa Roja',
      english: 'Red Salsa',
      info: 'A spicy salsa made with roasted tomatoes and red chillies.'
    },
    {
      spanish: 'Mole',
      english: 'Mole Sauce',
      info: 'A rich and complex sauce made with chillies, chocolate, and spices.'
    },
    {
      spanish: 'Habanero',
      english: 'Habanero Salsa',
      info: 'A fiery hot sauce made with habanero chillies.'
    },
    {
      spanish: 'Ninguno',
      english: 'None'
    },
  ],
};

const layerImages = {
  'Aguacate': aguacate,
  'Al Pastor': alPastor,
  'Cebolla': cebolla,
  'Cebolla en Escabeche': cebollaEnEscabeche,
  'Camarón': camaron,
  'Cilantro': cilantro,
  'Crema Mexicana': cremaMexicana,
  'Habanero': habanero,
  'Jalapenos': jalapenos,
  'Lechuga': lechuga,
  'Mole': mole,
  'Nopales': nopales,
  'Pico de Gallo': picoDeGallo,
  'Piña': pina,
  'Pollo Asado': polloAsado,
  'Pescado': pescado,
  'Queso Fresco': quesoFresco,
  'Queso Oaxaca': quesoOaxaca,
  'Queso Vegano': quesoVegano,
  'Repollo': repollo,
  'Salsa Roja': salsaRoja,
  'Salsa Verde': salsaVerde,
  'Setas': setas,
  'Tomate': tomate,
  'Tostada': tostada,
  'Tortilla de Harina': tortillaDeHarina,
  'Tortilla de Maiz': tortillaDeMaiz
};

export { layerChoices, layerImages, multipleOptionLayers };