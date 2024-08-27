// Array ---> array is a collection of variable

var names = ['anis', 'rafi', 'abdullah', 'rinku', 'jinku']

console.log(names);
console.log(names.length);
console.log(names[3])

names.push('sokina') //array te seshe value add hoy
console.log(names)

names.pop() //sesher element ta remove kore dey
console.log(names)
names.pop()
console.log(names)

//array add kora hoy concat function er maddome


var country1 = ['bd', 'aus', 'eng']
var country2 = ['sl', 'pak', 'nzl']

var country = country1.concat(country2)
console.log(country)


//-------array loop-------

var num = [10, 20, 30, 40, 50, 60]

for (var i = 0; i < num.length; i++) {
    console.log(num[i])
}

//------ for loop er moode sum ----------
var nums = [10, 20, 30, 40, 50, 60]
var sum = 0;

for (var i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
}
// console.log(sum)


//......Array method ----
//push
//poop
//shift
//unshift
//splice
//sort method (only alphabate niye kaj kore)
//reverse sort method
//

