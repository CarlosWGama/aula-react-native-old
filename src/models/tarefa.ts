/**
 * Classe Modelo com os dados lógicos das tarefas
 * @class Tarefa
 */
export default class Tarefa {
    constructor(public descricao:string, public data:string, public id?:string, public imagem?:string, public usuarioID?:string) {}
}