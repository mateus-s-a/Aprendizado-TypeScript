let cursos05: string[] = [];
cursos05.push("TypeScript", "JavaScript", "C#", "Java", "Python", "C++");
cursos05.push("PHP");
console.log(cursos05);


let valores05: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
valores05.push(10);
console.log(valores05);


let teste05: string|number|boolean;
teste05 = "Estudos";
teste05 = 2024;
teste05 = true;
console.log(teste05);


let any05: any;
any05 = cursos05;
console.log(any05);
any05 = valores05;
console.log(any05);


let array_any = [0, "String", true];
console.log(array_any);