import { expect } from 'chai';
import Person from '../src/models/Person';
import Student from '../src/models/Student';
import Subject from '../src/models/Subject';

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

describe('Testa a model Student', () => {
  it('a) Testa se Student cria um Objeto', () => {
    const StudentObj = new Student('Rodrigo Pova', new Date(1995, 5, 10));
    expect(StudentObj).to.be.an('object');
  });
  it('b) Testa se a função retorna o nome quando solicitado', ()=> {
    const StudentObj:Student = new Student('Rodrigo', new Date(1995, 5, 10));
    StudentObj.name = 'Rodrigo Pova'
    expect(StudentObj.name).to.be.equal('Rodrigo Pova');
  })
  it('c) Testa se a função retorna a data de nascimento quando solicitado', ()=> {
    const StudentObj:Student = new Student('Rodrigo', new Date(1995, 5, 10));
    
    expect(StudentObj.birthDate.getDate()).to.be.equal(10);
    expect(StudentObj.birthDate.getFullYear()).to.be.equal(1995);
    // Precisa ser 6, getDay não retorna o dia do mês, e sim o dia da semana.
    expect(StudentObj.birthDate.getDay()).to.be.equal(6);
  })
  it('d) Testa se a classe gera uma matrícula pra cada aluno', () => {
    const StudentObj:Student = new Student('Rodrigo', new Date(1995, 5, 10));
    const regex = /W\g/;
    const validateEnrollment = regex.test(StudentObj.enrollment);
    // Aqui, verifica que não existe nenhum caracter especial no enrollment
    expect(validateEnrollment).to.be.equal(false);
  });
});

describe('Testa a model Subject', () => {
  it('a) Testa se a classe gera um objeto', () => {
    const SubjectObj = new Subject('Matematica');
    expect(SubjectObj).to.be.an('object');
  });
  it('b) Testa se a classe retorna e atualiza seu nome', () => {
    const SubjectObj:Subject = new Subject('Matematica')
    SubjectObj.name = 'História'
    expect(SubjectObj.name).to.be.equal('História');
  });
});