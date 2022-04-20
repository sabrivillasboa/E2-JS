const pizzas=[{
    id: 1,
    nombre:'Fugazzeta',
    ingredientes: ['cebolla', 'muzzarella'],
    precio: 500,
},{
    id: 2,
    nombre:'Calabresa',
    ingredientes: ['longaniza', 'muzzarella'],
    precio: 800,
},{
    id: 3,
    nombre:'Napolitana',
    ingredientes: ['tomate','aceite de oliva','ajo','muzzarella'],
    precio: 700,
},{
    id: 4,
    nombre:'Especial',
    ingredientes: ['jamon','morron','muzzarella'],
    precio: 800,
},{
    id: 5,
    nombre:'Muzzarella',
    ingredientes: ['muzzarella','aceitunas'],
    precio: 600,
},{
    id: 6,
    nombre:'con Huevo duro',
    ingredientes: ['huevo','muzzarella'],
    precio: 700,
},
]

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

const titulo1= pizzas.filter((pizza)=> pizza.id==1);
const printNombre1=titulo1.map((pizza)=>{
    return pizza.nombre 
});
const printPrecio1=titulo1.map((pizza)=>{
    return pizza.precio 
});
console.log(`La pizza ${printNombre1.toString()} cuesta ${printPrecio1.toString()} pesos.`);


const titulo2= pizzas.filter((pizza)=> pizza.id==2);
const printNombre2=titulo2.map((pizza)=>{
    return pizza.nombre 
});
const printPrecio2=titulo2.map((pizza)=>{
    return pizza.precio 
});
console.log(`La pizza ${printNombre2.toString()} cuesta ${printPrecio2.toString()} pesos.`);


const titulo3= pizzas.filter((pizza)=> pizza.id==3);
const printNombre3=titulo3.map((pizza)=>{
    return pizza.nombre 
});
const printPrecio3=titulo3.map((pizza)=>{
    return pizza.precio 
});
console.log(`La pizza ${printNombre3.toString()} cuesta ${printPrecio3.toString()} pesos.`);


const titulo4= pizzas.filter((pizza)=> pizza.id==4);
const printNombre4=titulo4.map((pizza)=>{
    return pizza.nombre 
});
const printPrecio4=titulo4.map((pizza)=>{
    return pizza.precio 
});
console.log(`La pizza ${printNombre4.toString()} cuesta ${printPrecio4.toString()} pesos.`);


const titulo5= pizzas.filter((pizza)=> pizza.id==5);
const printNombre5=titulo5.map((pizza)=>{
    return pizza.nombre 
});
const printPrecio5=titulo5.map((pizza)=>{
    return pizza.precio 
});
console.log(`La pizza ${printNombre5.toString()} cuesta ${printPrecio5.toString()} pesos.`);


const titulo6= pizzas.filter((pizza)=> pizza.id==6);
const printNombre6=titulo6.map((pizza)=>{
    return pizza.nombre 
});
const printPrecio6=titulo6.map((pizza)=>{
    return pizza.precio 
});
console.log(`La pizza ${printNombre6.toString()} cuesta ${printPrecio6.toString()} pesos.`);