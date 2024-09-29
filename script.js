document.getElementById('salarioForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let salario = parseFloat(document.getElementById('salario').value);
    let percentual = 0;

    if (salario <= 1280) {
        percentual = 20;
    } else if (salario > 1280 && salario <= 2700) {
        percentual = 15;
    } else if (salario > 2700 && salario <= 3500) {
        percentual = 10;
    } else if (salario > 3500) {
        percentual = 5;
    }

    let valorAumento = (salario * percentual) / 100;
    let novoSalario = salario + valorAumento;

    document.getElementById('salarioAtual').innerText = `Salário antes do reajuste: R$ ${salario.toFixed(2)}`;
    document.getElementById('percentual').innerText = `Percentual de aumento aplicado: ${percentual}%`;
    document.getElementById('valorAumento').innerText = `Valor do aumento: R$ ${valorAumento.toFixed(2)}`;
    document.getElementById('novoSalario').innerText = `Novo salário: R$ ${novoSalario.toFixed(2)}`;

    document.getElementById('resultado').style.display = 'block';
});
