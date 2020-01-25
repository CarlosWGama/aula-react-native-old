/**
 * Classe Modelo com os dados lógicos das tarefas
 * @class Tarefa
 */
export default class Tarefa {
    constructor(public descricao:string, public data:string, public id?:number, public imagem?:string) {}
}