// CODE here for your Lambda Classes
class Person {
    constructor (attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }

    speak() {
    return `Hello, my name is ${this.name}, and I am from ${this.location}.`;
    }
}

class Instructor extends Person{
    constructor (attributes) {
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Instructor {
    constructor (attributes) {
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favLanguage = attributes.favSubject;
    }
    listsSubjects(subjectArray) {
        return subjectArray.map(subject => subject)
    }
    PRAssignment(student, subject) {
        return `${student.name} has submitted a PR for ${subject}`
    }
}

class ProjectManager extends Student {
    constructor (attributes) {
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    }
    standUp(name, channel) {
        return `${name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(name, student, subject) {
        return `${name} debugs ${student.name}'s code on ${subject}`
    }
}

const teacher1 = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const student1 = new Student({
    name: 'Jim',
    location: 'his mama house',
    className: 'Javascript',
    favSubject: 'Javascript',
    previousBackground: 'Best Buy',
  });

  const pm1 = new ProjectManager({
    name: 'Josh',
    location: 'somewhere in Arizona',
    className: 'CSS',
    favSubject: 'Anything but Javascript',
    gradClassName: 'CS1 or something',
    favInstructor: 'Josh Knell'
  });

  // Teacher
  console.log(teacher1.name)
  console.log(teacher1.location)
  console.log(teacher1.age)
  console.log(teacher1.favLanguage)
  console.log(teacher1.specialty)
  console.log(teacher1.catchPhrase)
  console.log(teacher1.demo('Javascipt'))
  console.log(teacher1.grade(student1, student1.className))

  // Student
  console.log(student1.name)
  console.log(student1.location)
  console.log(student1.className)
  console.log(student1.favLanguage)
  console.log(student1.previousBackground)
  console.log(student1.listsSubjects( ['HTML', 'CSS', 'Javascript'] ))
  console.log(student1.PRAssignment(student1, 'CSS'))

  // ProjectManager
  console.log(pm1.name) 
  console.log(pm1.location)
  console.log(pm1.className)
  console.log(pm1.favLanguage)
  console.log(pm1.gradClassName)     
  console.log(pm1.standUp(pm1.name, 'Web20_Josh'))
  console.log(pm1.debugsCode(pm1.name, student1.name, 'CSS'))