import Cilindro from "../Model/Cilindro.js"

describe("teste da classe cilindro", ()=>{
    test("testando o cálculo do volume", ()=>{
        const raio = 2
        const altura = 3
        const volume = Math.PI * Math.pow(raio, 2) * altura

        const cilindro = new Cilindro(raio, altura)
        
        expect(cilindro.calcularVolume()).toBeCloseTo(volume,2)
    })
    test("Testando o cálculo da área total", ()=>{
        const raio = 2
        const altura = 3
        const cilindro = new Cilindro(raio, altura)
        const areaTotal = (2 * Math.PI * raio * altura) + (2 * Math.PI * Math.pow(raio, 2))
        expect(cilindro.calcularAreaTotal()).toBeCloseTo(areaTotal, 2)
    })
})