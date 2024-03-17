const Services = require("./Services.js");

class PeopleServices extends Services {
    constructor() {
        super("Pessoa");
    }

    async getRegistrationByStudent(id) {
        const student = await super.getOneRegisterById(Number(id));
        const registrationList = await student.getAulasMatriculadas();
        return registrationList;
    }
}

module.exports = PeopleServices;