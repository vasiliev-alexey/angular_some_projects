import { Component } from '@angular/core';
import { ReusableTableDumbColumnsInterface } from '../reusable-table-dumb/reusable-table-dumb.interfaces';
import { faker } from '@faker-js/faker';
import * as moment from 'moment';

interface UserInterface {
  firstName: string;
  lastName: string;
  middleName?: string;
  birthDate: string;
}

const format = 'DD.MM.yyyy';

class User implements UserInterface {
  constructor(
    public readonly firstName = 'Unknown',
    public readonly lastName = 'Unknown',
    public readonly middleName = '',
    public readonly birthDate = 'xx.xx.xxxx'
  ) {}
}

interface MegaUserInterface extends UserInterface {
  hobbies: string[];
}

class MegaUser extends User implements MegaUserInterface {
  constructor(
    firstName = 'Unknown',
    lastName = 'Unknown',
    middleName = '',
    birthDate = 'xx.xx.xxxx',
    public readonly hobbies = ['no hobbies']
  ) {
    super(firstName, lastName, middleName, birthDate);
  }
}

type CommonDataUserInterface = Partial<MegaUserInterface>;

@Component({
  selector: 'app-some-parent-component',
  templateUrl: './some-parent-component.component.html',
})
export class SomeParentComponentComponent {
  public readonly columns: ReusableTableDumbColumnsInterface<CommonDataUserInterface> =
    [
      { title: 'First name', key: 'firstName' },
      { title: 'Last name', key: 'lastName' },
      { title: 'Middle name', key: 'middleName' },
      { title: 'Age', key: 'birthDate' },
      { title: 'hobbies', key: 'hobbies' },
    ];

  public readonly commonUsers = generateUser();
  public readonly megaUsers = generateUser('mega') as MegaUserInterface[];

  isUser: boolean = true;

  onItemChange() {
    this.isUser = !this.isUser;
  }
}

const generateUser = (
  type: 'user' | 'mega' = 'user'
): Array<UserInterface> | Array<MegaUserInterface> => {
  const result = [];

  for (let i = 0; i < 7; i++) {
    if (i % 3) {
      result.push(new User());
    }

    let user =
      type === 'user'
        ? new User(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.name.middleName(),
            moment(faker.date.birthdate()).format(format)
          )
        : new MegaUser(
            faker.name.firstName(),
            faker.name.lastName(),
            faker.name.middleName(),
            moment(faker.date.birthdate()).format(format),
            [faker.word.verb(), faker.word.verb()]
          );
    result.push(user);
  }

  return result;
};
