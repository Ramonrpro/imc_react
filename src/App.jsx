import Formulario from "./components/Fomulario";
import Table from "./components/Table";

function App() {
  return (
    <div className=" container w-100 mx-auto text-center">
      <h1 className="text-center font-bold text-6xl mt-20 text-emerald-950">Calculadora de imc</h1>
      <p className="my-10 text-center text-2xl">
        A classificação do índice de massa corporal (IMC) pode ajudar a
        identificar problemas de obesidade ou desnutrição, em crianças,
        adolescentes, adultos e idosos.
      </p>
      <Formulario />
      <h2 className="mt-10 text-3xl text-emerald-950 font-bold ">Como interpretar meu imc?</h2>
      <p className="my-10 text-2xl mt-16">Depois do resultado você irá interpretar usando a seguinte tabela:</p>
      <Table />

      <footer className="flex justify-between px-10 font-bold py-3 mt-16">
        <a href="#">&copy; Ramon Rodrigo </a>
        Seja Natural!
      </footer>

     
    </div>
  );
}

export default App;
