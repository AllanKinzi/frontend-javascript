interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; 
  }

  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  const director1: Directors = {
    firstName: 'Jane',
    lastName: 'Smith',
    fullTimeEmployee: true,
    location: 'New York',
    numberOfReports: 5,
  };


  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };

  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }

  interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentInterface {
    private firstName: string;
    private lastName: string;
  
    constructor({ firstName, lastName }: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const student = new StudentClass({ firstName: 'Alice', lastName: 'Smith' });

