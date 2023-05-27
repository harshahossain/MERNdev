const person={
    firstName: 'Mitch', 
    lastName:'Conner',
    age:52,
    alias: 'Hennifer Lopez',
    occupation:['Con-Artist','Musician','Solider Ex'],
    isDead:false
    
};
var product={
    name:'Gummy Bears',
    inStock:true,
    price:1.99,
    flavors:["grappe","apple","cherry"]
};
//person["lastName"]
//product.flavors[1]
product.flavors.push("pineapple");

const dumdum={
    true:'dat', 
    null:'why would i do this?'
}
// dumdum.true// expected result: 'dat'
// dumdum.null// expected result:'why would i do this?'
dumdum["true"]
dumdum["null"]
const year={
    1999:'good',
    2020:'not kewl'
};
let birthYear=2020;
year[birthYear]   

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}
fullAddress = restaurant["address"] +' '+ restaurant["city"]+' ' + restaurant["state"]+' ' + restaurant["zipcode"]
fullAddress=`${restaurant.address} ${restaurant.city} ${restaurant.state} ${restaurant.zipcode}`

const midterms={
    dani:91, thomas:79
};
midterms.thomas=80;
midterms['dani']= 'A'
midterms['thomas']= 'B-'
midterms.ezra
midterms.ezra='A-'
midterms['antonio']='B+'

// midterms
// exppppected output: {dani: 'A', thomas: 'B-', ezra: 'A-', antonio: 'B+'}
const student ={
    firstName:'David',
    lastName:'Jones',
    exams:{
        midterm:92,
        final:89
    },
    extra:['Music','Art']
}

const comment=[
    {username: 'Tammy', text:'lololol', votes:9},
    {username:'FishBoi',text:'glub glub',votes:2344}
]
comment[0]
comment[1]
comment[1].text