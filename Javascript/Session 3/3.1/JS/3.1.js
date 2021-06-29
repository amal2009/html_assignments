//Find the pair of elements whose sum is equal to Zero or Closest to Zero

let a=prompt("Enter the numbers");
let arr=a.split(",");
for(let i=0;i<arr.length;i++){
    arr[i]=parseInt(arr[i]);
}
let min_sum,sum;
min_sum=arr[0]+arr[1];
min_l=0;
min_r=1;
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        sum=arr[i]+arr[j];
        if(Math.abs(sum)<Math.abs(min_sum)){
            min_sum=sum;
            min_l=i;
            min_r=j;
        }
    }
}
console.log("The sum of numbers close to zero are "+arr[min_l]+" "+arr[min_r]+" and sum: "+min_sum);


// Write a function charFreq() that takes a string and builds a frequency listing of the characters 
// contained in it.

let string='abbabcbdbabdbdbabababcbcbabcharFreq';
let charFreq=function(string){
    let arr=string.split("");
    let result=new Map();
    for(let i=0;i<arr.length;i++){
        if(result.has(arr[i])){
            let size=result.get(arr[i])+1;
            result.set(arr[i],size);
        }
        else{
            result.set(arr[i],1);
        }
    }
    console.log(result);
}


// Print the value using window.alert which is repeated more number of times than other elements in 
// the accepted array.

let a=prompt("Enter the array of numbers");
let arr=a.split(",");
let result=new Map();
for(let i=0;i<arr.length;i++){
    if(result.has(arr[i])){
        let size=result.get(arr[i])+1;
        result.set(arr[i],size);
    }
    else{
        result.set(arr[i],1);
    }
}
let max_size=0;
let ans;
let result_arr=[];
for(let [key,value] of result){
    if(value>=max_size){
        max_size=value;
        ans=key;
    }
}
alert(ans+" occurs "+max_size+" times");


//From an array of number find the elements which has sum of given number.
let a=prompt("Enter the numbers");
let arr=a.split(",");
let number=prompt("Enter the required sum number");
for(let i=0;i<arr.length;i++){
    arr[i]=parseInt(arr[i]);
}
for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if((number-(arr[i]+arr[j])==0)){
            console.log(arr[i],arr[j]);
        }
    }
}


// A shopkeeper wants to increase his sales by giving different discounts to his customers. He has a 
// list of daily customer details and another list with product names with price.
// Discount criteria is like this,
// 1. For daily customers 5% discount on total product cost
// 2. For new customers 2% discount on total product cost
// 3. If any purchasing product quantity is greater than or equal to 5 then 2% discount on that 
// product irrespective of daily customer or new customer.

let customer_names=["A","B","C","D"];
let products_list=[{"Food":20},{"Drinks":10},{"Books":25},{"Snacks":5}]
let product_name=prompt("Choose 1.Food  2.Drinks    3.Books 4.Snacks ");
product_name=parseInt(product_name);
let price;
switch(product_name){
    case 1:
        price=products_list[0]["Food"];
        break;
    case 2:
        price=products_list[1]["Drinks"];
        break;
    case 3:
        price=products_list[2]["Books"];
        break;
    case 3:
        price=products_list[3]["Snacks"];
        break;
    default:
        alert("Product not available");
        let product_name=prompt("Choose 1.Food  2.Drinks    3.Books 4.Snacks ");
        break;
}
let customer_name=prompt("Enter your name");
customer_name=customer_name.toUpperCase();
let quantity=prompt("Enter the quantity of the product");
quantity=parseInt(quantity);
let f1=function(quantity){
    let total=(price*quantity);
    console.log("The price without discount: Rs "+total);
    let total_discount=(price*quantity*0.07);
    console.log("The price after discount: Rs "+(total-total_discount));
}
let f2=function(quantity){
    let total=(price*quantity);
    console.log("The price without discount: Rs "+total);
    let total_discount=(price*quantity*0.05);
    console.log("The price after discount: Rs "+(total-total_discount));
}
let f3=function(quantity){
    let total=(price*quantity);
    console.log("The price without discount: Rs "+total);
    let total_discount=(price*quantity*0.04);
    console.log("The price after discount: Rs "+(total-total_discount));
}
let f4=function(quantity){
    let total=(price*quantity);
    console.log("The price without discount: Rs "+total);
    let total_discount=(price*quantity*0.02);
    console.log("The price after discount: Rs "+(total-total_discount));
}
if(customer_names.includes(customer_name)){
    if(quantity>=5){
        f1(quantity);
    }
    else{
        f2(quantity);
    }
}
else{
    if(quantity>=5){
        f3(quantity);
    }
    else{
        f4(quantity);
    }
}



// Find the revenue of the company, youngest employee, oldest employee, employees above a particular age group

let companies={
    "TCS": {
    "revenue" : 1000000,
    "expenses": { "salaries": 30, 
    "rent": 20,
    "utilites": 15
    },
    "employees": [
    {
    "name": "Joe",
    "age" : 30,
    "role" : "Admin"
    },
    {
    "name": "34",
    "age" : 40,
    "role" :"Tester"
    },
    {
    "name": "Sherlock",
    "age" : 45,
    "role" : "Programmer"
    }
    ]
},
"Osmosys": {
    "revenue" : 5000000,
    "expenses": { "salaries": 30, 
    "rent": 20,
    "utilites": 15
    },
    "employees": [
    {
    "name": "Max",
    "age" : 30,
    "role" : "Admin"
    },
    {
    "name": "Luke",
    "age" : 40,
    "role" :"Tester"
    },
    {
    "name": "Thomas",
    "age" : 45,
    "role" : "Programmer"
    }
    ]
}
}

let youngest_employee=function(company){
    let young_age=50;
    let young_name;
    for(let i=0;i<companies[company]["employees"].length;i++){
        if(companies[company]["employees"][i]['age']<young_age){
            young_age=companies[company]["employees"][i]['age'];
            young_name=companies[company]["employees"][i]['name'];
        }
}
console.log(young_name+" is the youngest man in "+ company +" who is "+young_age+" years old");
}

let oldest_employee=function(company){
    let old_age=0;
    let old_name;
    for(let i=0;i<companies[company]["employees"].length;i++){
        if(companies[company]["employees"][i]['age']>old_age){
            old_age=companies[company]["employees"][i]['age'];
            old_name=companies[company]["employees"][i]['name'];
        }
}
console.log(old_name+" is the oldest man in "+ company +" who is "+old_age+" years old");
}

let age_filter=function(range_age){
    let a;
    a=companies[company]["employees"].filter(r=> r.age>=range_age);
    console.log("The employees whose age is greater than or equal to "+range_age+" : ");
    for(let i=0;i<a.length;i++){
        console.log(a[i]["name"]);
    }
}

let profit=function(company){
    let total=companies[company]["expenses"]['rent']+companies["TCS"]["expenses"]['salaries']+companies["TCS"]["expenses"]["utilites"]
    let revenue=companies[company]["revenue"]
    let profit=revenue-(revenue*total*0.01);
    console.log("The profit of "+company+" : "+profit);
}

let roles=function(company){
    let req_roles=prompt("Enter the roles :'Programmer' 'Tester' 'Admin' ");
    let a;
    a=companies[company]["employees"].filter(r=> r.role==req_roles);
    console.log("The "+req_roles+"'s are ");
    for(let i=0;i<a.length;i++){
        console.log(a[i]["name"]);
    }
    
}


let company=prompt("Enter the company details you want TCS Osmosys");
let choise=prompt("Enter the 1.Youngest Employee 2. Oldest Employee 3.Age range 4.Profit 5.Roles");
choise=parseInt(choise);

switch(choise){
    case 1:
        youngest_employee(company);
        break;
    case 2:
        oldest_employee(company);
        break;
    case 3:
        let range_age=prompt("Enter the range of age required");
        age_filter(range_age);
        break;
    case 4:
        profit(company);
        break;
    case 5:
        roles(company);
        break;
}




// Create a library where you can add books, add authors , edit books and edit authors.
let array_books=[];
let array_authors=[];

let addBooks=function(name,authorID,year,rating){
    let book=new Object();
    book.name=name;
    book.authorID=authorID;
    book.year=year;
    book.rating=rating;
    book.id=array_books.length+1;
    array_books.push(book);
}
let addAuthors=function(name_author){
    let author=new Object();
    author.name=name_author;
    author.id=array_authors.length+1;
    array_authors.push(author);
}
addBooks("Twilight",2,2019,4.2);
addBooks("The Divergent",3,2016,4.4);
addBooks("The Immortals of Meluha",1,2020,4.6);
addBooks("Raavan",1,2021,4.7);



addAuthors("Amish");
addAuthors("Stephenie Meyer");
addAuthors("veronica Roth");

let books_author=function(name){
    let author_id=array_authors.filter(a_id=> a_id.name=name);
    author_id=author_id[0]["id"];
    let books=array_books.filter(a=> a.authorID==author_id);
    for(let i=0;i<books.length;i++){
        console.log(books[i]['name']);
    }
}

let book_rating=function(rating){
    let books=array_books.filter(a=> a.rating>=rating);
    for(let i=0;i<books.length;i++){
        console.log(books[i]['name']);
    }
}

let edit_books=function(book_id,bookNewName){
    let book=array_books.filter(a=> a.id==book_id);
    book[0]['name']=bookNewName;
}
let edit_author=function(author_id,authorNewName){
    let author=array_authors.filter(a=> a.id==author_id);
    author[0]['name']=authorNewName;
}


// Allow the user to enter the date of birth in a format (m-d-Y ie 12-31-1990).
// Then display the following,
// 1. Seconds lived.
// 2. Hours lived
// 3. Days lived
// 4. Weeks lived
// 5. Months lived


let dob=new Date("09/20/1997");
let today=new Date();

let milliseconds=today.getTime()-dob.getTime();
let seconds=milliseconds/1000;
let minutes=seconds/60;
let hours=minutes/60;
let days=hours/24;
let weeks=days/7;
let years=today.getFullYear()-dob.getFullYear();
console.log("Seconds: "+seconds);
console.log("Hours: "+parseInt(hours));
console.log("Days: "+parseInt(days));
console.log("Weeks: "+parseInt(weeks));
console.log("Years: "+years);





// Use localStorage add friends birthday, find oldest friend, no of days for the birthday.

localStorage.setItem("Amal",20);
localStorage.setItem("Luke",24);
localStorage.setItem("David",14);
localStorage.setItem("Bruno",30);
let array_name=[];
for(let i=0;i<localStorage.length;i++){
    let name=localStorage.key(i);
    array_name.push(name);
}

let old_age=1;
let old_name;
let oldest_friend=function(){
    for(let i=0;i<array_name.length;i++){
        let x=localStorage.getItem(array_name[i]);
        if(x>old_age){
            old_age=x;
            old_name=array_name[i];
        }
    }
    console.log(old_name+" is the oldest friend");
}

let no_of_days=function(friend_name){
    let d=localStorage.getItem(friend_name);
    let day="07/"+d+"/2021";
    let b_day=new Date(day);
    let today=new Date();
    let remaining_time=b_day-today;
    let remaining_day=remaining_time/(1000*60*60*24);
    console.log("Days remaining: "+parseInt(remaining_day));
}