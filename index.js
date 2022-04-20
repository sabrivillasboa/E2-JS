const pizzas=[ Fugazzeta= {
    id: 1,
    nombre:'Fugazzeta',
    ingredientes: ['cebolla', 'muzzarella'],
    precio: 500,
}, Calabresa= {
    id: 2,
    nombre:'Calabresa',
    ingredientes: ['longaniza', 'muzzarella'],
    precio: 800,
}, Napolitana= {
    id: 3,
    nombre:'Napolitana',
    ingredientes: ['tomate','aceite de oliva','ajo','muzzarella'],
    precio: 700,
}, Especial= {
    id: 4,
    nombre:'Especial',
    ingredientes: ['jamon','morron','muzzarella'],
    precio: 800,
}, Muzzarella= {
    id: 5,
    nombre:'Muzzarella',
    ingredientes: ['muzzarella','aceitunas'],
    precio: 600,
}, Huevo= {
    id: 6,
    nombre:'con Huevo duro',
    ingredientes: ['huevo','muzzarella'],
    precio: 700,
},
];

//a) Las pizzas que tengan un id impar.

const idImpar = pizzas.filter(pizza => pizza.id %2 !==0);
const printNombreImpar=idImpar.map(pizza=>{
            return pizza.nombre 
});

console.log(`Las pizzas que tienen un ID impar son ${printNombreImpar.toString()}.`)


//b) ¿Hay alguna pizza que valga menos de $600?

const price = pizzas.find(pizza => pizza.precio < 600);

console.log(`La pizza que vale menos de $600 es ${price.nombre}.`);

//c) Los nombres de todos las pizzas.

const nombrePizzas = pizzas.map(pizza=>{
        return pizza.nombre
})

console.log(`Los nombres de cada pizza son ${nombrePizzas.toString()}.`);


//d) Los precios de las pizzas.

const precioPizzas = pizzas.map(pizza=>{
    return pizza.precio
})

console.log(`Los precios de cada pizza son ${precioPizzas.toString()}.`);


//e) El nombre de cada pizza con su respectivo precio.

const tipoPizza = pizzas.forEach(pizza =>{
    console.log(`La pizza ${pizza.nombre} cuesta ${pizza.precio} pesos.`)
});




/*const titulo1= pizzas.filter((pizza)=> pizza.id==1);
const printNombre1=titulo1.map((pizza)=>{
    return pizza.nombre 
});
const printPrecio1=titulo1.map((pizza)=>{
    return pizza.precio 
});
console.log(`La pizza ${printNombre1.toString()} cuesta ${printPrecio1.toString()} pesos.`);*/