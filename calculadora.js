//calculator v1.0
const print = element=>{
    console.log(element);
}
class Calculadora {
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    somar(){
        print(`Resultado: ${this.num1 + this.num2}`)
    }
    subtrair(){
        print(`Resultado: ${this.num1 - this.num2}`)
    }
    multiplicar(){
        print(`Resultado: ${this.num1 * this.num2}`)
    }
    dividir(){
        print(`Resultado: ${this.num1 / this.num2}`)
    }
    verificar(){
        if(this.num1!=this.num2){
            if(this.num1 && this.num2 % 2 == 0){
                console.log("Os dois números são PARES");
            } if(this.num1 && this.num2 % 2 != 0){
                console.log("Os dois números são ÍMPARES");
            } if(this.num1 % 2 == 0 && this.num2 % 2 != 0){
                console.log(`${this.num1} é PAR e ${this.num2} é ÍMPAR!`);
            } if(this.num1 % 2 != 0 && this.num2 % 2 == 0){
                console.log(`${this.num2} é PAR e ${this.num1} é ÍMPAR!`);
            } 
            this.num1 > this.num2 ? console.log(`${this.num1} é MAIOR`) : console.log(`${this.num2} é MAIOR`);
            this.num1 < this.num2 ? console.log(`${this.num1} é MENOR`) : console.log(`${this.num2} é MENOR`);
            console.log("Os números são DIFERENTES")
        }
        else{
            if(this.num1 && this.num2 % 2 == 0){
                console.log("Os dois números são PARES");
            } if(this.num1 && this.num2 % 2 != 0){
                console.log("Os dois números são ÍMPARES");
            }
            console.log(`Os números são IGUAIS!`)
        }
    }
}
const Idades = new Calculadora(7,7);
Idades.verificar()
