class PeopleTestData {
    constructor() {
        this.id;
        this.name;
        this.age;
        this.phone;
        this.lastTag;
        this.email;
    }

    getId() {
        return this.id;
    }

    setId(id){
        this.id = id;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getPhone() {
        return this.phone;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email){
        this.email = email;
    }

    setName(newName){
        this.name = newName;
    }

    setPhone(phone) {
        this.phone = phone;
    }

    setAge(age) {
        this.age = age;
    }

    getLastTag() {
        return this.lastTag;
    }

    setLastTag(lastTag) {
        this.lastTag = lastTag;
    }

}

export default new PeopleTestData();