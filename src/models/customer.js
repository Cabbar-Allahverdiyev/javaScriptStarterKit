import User from "./user.js";

export default class Customer extends User{
    constructor(id,firstName,lastname,city,age,creditCardNumber){
        super(id,firstName,lastname,city,age);
        this.creditCardNumber=creditCardNumber
    }
}