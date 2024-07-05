"use strict";
class Curso {
    canal = null;
    curso = null;
    constructor(p_canal, p_curso) {
        this.canal = p_canal;
        this.curso = p_curso;
    }
}
let c1 = new Curso("Canal do YouTube", "TypeScript");
console.log(c1.canal);
console.log(c1.curso);
