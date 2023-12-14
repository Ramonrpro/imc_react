function Table() {
    
    return (
        <table className="flex  justify-center text-2xl my-100 ">
            <tbody className=" border-2">
                <tr className=" bg-emerald-100">
                    <td className="font-bold md:px-24 p-2">IMC</td>
                    <td className="font-bold md:px-24 p-2">Classificação</td>
                </tr>
                <tr>
                    <td className="p-2">Menor que 18,5</td>
                    <td className="p-2">Abaixo do peso</td>
                </tr>
                <tr>
                    <td className="bg-emerald-50 p-2">18,5 a 24,9</td>
                    <td className="bg-emerald-50 p-2">Normal</td>
                </tr>
                <tr>
                    <td className="p-2">25 a 29,9</td>
                    <td className="p-2">Sobrepeso</td>
                </tr>
                <tr>
                    <td className="bg-emerald-50 p-2">30 a 34,9</td>
                    <td className="bg-emerald-50 p-2">Obesidade grau I</td>
                </tr>
                <tr>
                    <td className="p-2">35 a 39,9</td>
                    <td className="p-2">Obesidade grau II</td>
                </tr>
                <tr>
                    <td className="bg-emerald-50 p-2">Maior que 40</td>
                    <td className="bg-emerald-50 p-2">Obesidade grau III</td>
                </tr>

            </tbody>
        </table>
    )
}
export default Table