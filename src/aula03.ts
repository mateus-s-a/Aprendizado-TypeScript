/* Aula 03 */
class Curso {
    canal = null;
    curso = null;
    constructor(p_canal:any, p_curso:any) {
        this.canal = p_canal;
        this.curso = p_curso;
    }
}

let c1 = new Curso("Canal do YouTube", "TypeScript");
console.log(c1.canal);
console.log(c1.curso);