const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Дарья",
            "id_3": "Мария",
            "id_4": "Анна",
            "id_5": "Дина",
            "id_6": "Наталья",
            "id_7": "Милана",
            "id_8": "Василиса",
            "id_9": "Ева",
            "id_10": "Агния"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        const male = this.randomIntNumber();
        const gender = male == 1? this.GENDER_MALE : this.GENDER_FEMALE;
        return gender;                    
    },

    randomFirstName: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        }
        return this.randomValue(this.firstNameFemaleJson);
    },

    randomSurname: function () {
        if (this.person.gender == this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        }
        return this.randomValue(this.surnameJson) + 'а';

    },

    birthYear: function () {
        const year = this.randomIntNumber(2004,1970);
        const month = this.randomIntNumber(12,1);
        const day = this.randomIntNumber(28,1);
        const birth = String(year) + '.' + String(month) + '.' + String(day);
        return birth;                    
    },

  
    
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.birthYear = this.birthYear();
        return this.person;
    }
};
