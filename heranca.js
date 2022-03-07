//Classe pai
class Carro{
    static alerta = true;
    constructor(tpCarro,tpComb){
        this.tipo = tpCarro; //1=passeio, 2=transporte, 3=combate
        this.qtdeComb = 100;
        this.ligado = false;
        this.tpComb = tpComb; //1=gasolina, 2=diesel, 3=etanol
    }
    info(){
       if(this.tipo == 1){
           console.log("Tipo de carro: Passeio")
       }
       else if(this.tipo == 2){
        console.log("Tipo de carro: Transporte")
        }       
        else if(this.tipo == 3){
        console.log("Tipo de carro: Combate")
        }   
       console.log("Qtd de comb..........: " + this.qtdeComb)
       console.log("Ligado..........: " + (this.ligado ? "Sim" : "Não"));
       if(this.tpComb == 1){
           console.log("Tipo de combustível: Gasolina");
       }
       if(this.tpComb == 2){
        console.log("Tipo de combustível: Diesel");
        }
        if(this.tpComb == 3){
        console.log("Tipo de combustível: Etanol");
        } else{
            console.log("Tipo inválido, digite novamente")
        }
    }
    set setLigado(t){
        this.ligado = t;
    }
    get getLigado(){
        return this.ligado;
    }
    get getAlerta(){
        return Carro.alerta;
    }
    set setComb(v){
        if(v < 0 || v > 100){
            console.log("valor inválido, digite outro");
        } else {
            this.qtdeComb = v;
        }
    }
    get getComb(){
        return this.qtdeComb;
    }
    verificarComb(){
        if(this.qtdeComb <= 10){
            console.log("Seu combustível está BAIXO! Abasteça o veículo")}
        else{
            console.log("Seu combustível está bom, boa viagem")
        }
    }
}

//Classe filho 1
class CarroCombate extends Carro{
    constructor(potTiro){
        //Define alguma coisa da classe pai
        super(3,2)
        this.tiros = 1000
        this.potenciaTiro = potTiro;
    }
    info(){
        super.info()
        console.log(`Qtde Tiros: ${this.tiros}`)
        console.log(`Potência de tiro: ${this.potenciaTiro}`)
        console.log(`Qtde Combustivel : ${this.qtdeComb}`)
        console.log("----------------------")
    }

}
class CarroTransporte extends Carro{
    constructor(){
        super(2,1)
    }
}
const c1 = new CarroCombate(5000)
const c2 = new CarroTransporte()

//c1.info();
//c2.info();

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
        this.raio = novaAltura;
    }
    get getAltura(){
        return this.altura;
    }
}
const cilindro1 = new Volume(10,20);
console.log(cilindro1)
cilindro1.setRaio = 30
console.log(cilindro1)
cilindro1.setAltura = 50;
console.log(cilindro1)

cilindro1.calcular()
//O volume do cilindro é 157000m³
console.log(cilindro1.getAltura)
