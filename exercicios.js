class Distancia {
    constructor(_p1, _p2){
        this.p1 = _p1;
        this.p2 = _p2;
    }
    calcular(){
        this.distancia = this.p1 - this.p2;
        if(this.distancia < 0){
            this.distancia *= -1;
        }
        console.log(`A distância entre os dois corpos é de ${this.distancia}m.`)
    }
}

const Corpos = new Distancia(1500, 2910)

Corpos.calcular()
//A distância entre os dois corpos é de 1410m.

//---------------------------------------------------------
//Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. Go to the editor
//Volume of a cylinder : V = πr2h
//where r is the radius and h is the height of the cylinder.
class Volume{
    //static pi = 3.14;
    constructor(r, h){
        this.raio = r;
        this.altura = h;
        this.pi = 3.14;
    }
    calcular(){
        if(this.raio < 0 || this.altura < 0){
            console.error("VALOR INVÁLIDO, DIGITE NOVAMENTE")
        }else{
            this.resultado = this.pi*(this.raio*this.raio)*this.altura;
            console.log(`O volume do cilindro é ${this.resultado}m³`)
        }
    }
    set setRaio(novoRaio){
        this.raio = novoRaio;
    }
    get getRaio(){
        return this.raio;
    }
    set setAltura(novaAltura){
        this.altura = novaAltura;
    }
    get getAltura(){
        return this.altura;
    }
}
const cilindro1 = new Volume(10,20);
cilindro1.setRaio = 10
cilindro1.setAltura = 50;
console.log(`Valor da Altura: ${cilindro1.getAltura}`)
console.log(`Valor do Raio: ${cilindro1.getRaio}`)

cilindro1.calcular()
//O volume do cilindro é 157000m³

//---------------------------------------------------------
//Calculadora de multilplicação
class CalculadoraMultiplicacao{
    constructor(_value,_length){
        this.value = _value;
        this.length = _length;
    }
    multiplicar(){
        for(let i = 1; i <= this.length; i++){
            console.log(`${this.value} x ${i} = ${this.value*i}`);
        }
    }
}
const num1 = new CalculadoraMultiplicacao(5,20);

num1.multiplicar()