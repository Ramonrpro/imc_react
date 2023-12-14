import { useState } from "react";

function Formulario() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const resultado = (+peso / (+altura / 100) ** 2).toFixed(1);
  const imc = resultado
  let frase 

  if (imc < 18.5) {
    frase = `Seu IMC é ${imc} você está abaixo do peso`;
 } else if (imc >= 18.5 && imc <= 24.8) {
    frase = `Seu IMC é ${imc} você está no peso ideal.`;
 } else if (imc >= 25 && imc <= 29.5) {
    frase = `Seu imc é ${imc} você está com sobrepeso`;
 } else if (imc >= 30 && imc <= 34.9) {
    frase = `Seu imc é ${imc} você está com obesidade grau I`;
 } else if (imc >= 35 && imc <= 39.9) {
    frase = `Seu imc é ${imc} você está com obesidade grau II`;
 } else if (imc >= 40) {
    frase = `Seu imc é ${imc} você está com obesidade grau III`;
 }
  

  return (
    <div className="bg-emerald-100 rounded-2xl  ">
      <h3 className="font-bold text-center mt-7 py-7 text-5xl text-emerald-950">
        Seus Dados
      </h3>
      <form className="flex-col text-center mx-auto">
        <label className="font-bold text-2xl text-emerald-950">Peso</label>{" "}
        <br />
        <input
          onChange={(event) => setPeso(event.target.value)}
          className="rounded mt-2 p-2 border-2 border-emerald-950 "
          type="number"
        />{" "}
        <br />
        <label className="font-bold text-2xl text-emerald-950">Altura</label>
        <br />
        <input
          onChange={(event) => setAltura(event.target.value)}
          className="rounded mt-2 p-2 border-2 border-emerald-950"
          type="number"
        />
        <br />

      </form>
      <h3 className="text-center text-3xl font-bold pb-4 mt-10 text-emerald-950 ">
        Resultado:
      </h3>
      <p className="font-bold text-2xl pb-3">{imc} </p>
      <p className="font-bold text-2xl pb-3">{frase} </p>
    </div>
  );
}

export default Formulario;
