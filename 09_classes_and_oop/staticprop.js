class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`Username:${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const alyvia=new User("alyvia")
// console.log(alyvia.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const samsung=new Teacher("samsung","samsung@galaxy.com")
samsung.logMe()