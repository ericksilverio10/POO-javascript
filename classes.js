class Carro{
    constructor(cor, marca, modelo){
        this.cor = cor;
        this.marca = marca;
        this.modelo = modelo;
        this.ligado = false;
        this.km = 0;
        this.comb = 10;
    }
    info(){
       console.log("Cor..........: " + this.cor)
       console.log("Marca..........: " + this.marca)
       console.log("Modelo..........: " + this.cor)
       console.log("Ligado..........: " + (this.ligado ? "Sim" : "Não"));
       console.log("KM..........: " + this.km)
       console.log("Combustível..........: " + this.comb)
    }
    ligar(){
        this.ligado = true;
    }
    desligar(){
        this.ligado = false;
    }
    set setComb(v){
        if(v < 0 || v > 100){
            console.log("valor inválido, digite outro");
        } else {
            this.comb = v;
            console.log(`Combustível alterado, valor atual: ${this.comb}L`);
        }
    }
    get getComb(){
        return this.comb;
    }
    verificarComb(){
        if(this.comb <= 10){
            console.log("Seu combustível está BAIXO! Abasteça o veículo")}
        else{
            console.log("Seu combustível está bom, boa viagem")
        }
    }
}
const c1 = new Carro("Vermelho", "VW", "Fox")

c1.setComb = 40
console.log(c1.getComb)
c1.info();
c1.verificarComb()
