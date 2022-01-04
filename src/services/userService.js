import { users } from "../data/users.js";

export default class UserService{
    constructor (){
        this.error=[];
        this.customers=[];
    }

    add(user){
       // this.users.push(user) 
    }
    lgetById(id){
        //return this.users.find(u=>u.id===id)
    }

    load(){
        for (const user of users) {
         switch(user.type){
            case "customer":
                this.customers.push(user);
                break;
            case "customer":
                this.customers.push(user);
                break;
            default:
                this.errors.push("Xeta")
                break;

         }
            
        }
    }

    validateCustomer(user){
        let requiredFields="id firstName lastName age city".split(" ");
        for (const field of requiredFields) {
            if (!user[field]) {
                this.errors.push(new DataError(`Validation problem on ${field}`,user))
            }
        }
    }
}