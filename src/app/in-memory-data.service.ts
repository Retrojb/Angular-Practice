import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
        {id: 1,
        firstName: 'John',
        lastName: 'Baltes',
        job: 'programmer',
        salary: 60000,
        address: '333 Something St'
      },
      {
        id: 2,
        firstName: 'Bob',
        lastName: 'Barker',
        salary: 6000000
      },
      {
        id: 3,
        firstName: 'Norman',
        lastName: 'Reedus',
        salary: 100000
      },
      {
        id: 4,
        firstName: 'Chuck',
        lastName: 'Norris',
        salary: 60000000
      },
      {
        id: 5,
        firstName: 'Rigby',
        lastName: 'Pupper',
        salary: 0
      },
      {
        id: 6,
        firstName: 'Sterling',
        lastName: 'Archer',
        salary: 560983
      },
      { id: 11, firstName: 'Mr. Nice' },
      { id: 12, firstName: 'Narco' },
      { id: 13, firstName: 'Bombasto' },
      { id: 14, firstName: 'Celeritas' },
      { id: 15, firstName: 'Magneta' },
      { id: 16, firstName: 'RubberMan' },
      { id: 17, firstName: 'Dynama' },
      { id: 18, firstName: 'Dr IQ' },
      { id: 19, firstName: 'Magma' },
      { id: 20, firstName: 'Tornado' }
    ];
    return {heroes};
  }
}