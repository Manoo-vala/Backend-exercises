import { expect } from 'chai';
import Person from '../src/models/Person';

describe('Testa a model Person', () => {
  it('a) Testa se Person cria um Objeto', () => {
    const PersonObj = new Person('Rodrigo Pova', new Date(1995, 5, 10));
    expect(PersonObj).to.be.an('object');
  });
  it('b) Testa se a função retorna o nome quando solicitado', ()=> {
    const PersonObj:Person = new Person('Rodrigo', new Date(1995, 5, 10));
    PersonObj.name = 'Rodrigo Pova'
    expect(PersonObj.name).to.be.equal('Rodrigo Pova');
  })
  it('c) Testa se a função retorna a data de nascimento quando solicitado', ()=> {
    const PersonObj:Person = new Person('Rodrigo', new Date(1995, 5, 10));
    
    expect(PersonObj.birthDate.getDate()).to.be.equal(10);
    expect(PersonObj.birthDate.getFullYear()).to.be.equal(1995);
    // Precisa ser 6, getDay não retorna o dia do mês, e sim o dia da semana.
    expect(PersonObj.birthDate.getDay()).to.be.equal(6);
  })
});