import { Component } from '@angular/core';
import {
  ReusableTableDumbColumnsInterface
} from '../reusable-table-dumb/reusable-table-dumb.interfaces';

interface UserInterface {
  firstName: string
  lastName: string
  middleName?: string
  birthDate: string
}

class User implements UserInterface {
  constructor(
    public readonly firstName = 'Unknown',
    public readonly lastName = 'Unknown',
    public readonly middleName = '',
    public readonly birthDate = 'xx.xx.xxxx'
  ) {
  }
}
interface MegaUserInterface extends UserInterface {
  hobbies: string[]
}

class MegaUser extends User implements MegaUserInterface{
  constructor(
    firstName = 'Unknown',
    lastName = 'Unknown',
    middleName = '',
    birthDate = 'xx.xx.xxxx',
    public readonly hobbies = ['no hobbies'],
  ) {
    super(firstName, lastName, middleName, birthDate)
  }
}

@Component({
  selector: 'app-some-parent-component',
  templateUrl: './some-parent-component.component.html',
})
export class SomeParentComponentComponent {
  public readonly columns: ReusableTableDumbColumnsInterface<UserInterface> = [
    { title: 'First name', key: 'firstName'},
    { title: 'Last name', key: 'lastName'},
    { title: 'Middle name', key: 'middleName'},
    { title: 'Age', key: 'birthDate'},
  ]

  public readonly commonUsers: UserInterface[] = [
    new User('Igor','Miyagi', 'Alekseevich', '20.01.1976'),
    new User()
  ]

  public readonly megaUsers: MegaUserInterface[] = [
    new MegaUser(
      'Igor','Miyagi', 'Alekseevich', '20.01.1976',
      ['football', 'flowers']
    ),
    new MegaUser()
  ]
}
