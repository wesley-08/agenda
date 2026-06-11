let compromissos = [];

function adicionar() {

    let dia = document.getElementById("dia").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let horario = document.getElementById("horario").value;
    let descricao = document.getElementById("descricao").value;
    let importante = document.getElementById("importante").checked;

    if (dia == "" || mes == "" || ano == "" || horario == "" || descricao == "") {
        alert("Preencha todos os campos!");
        return;
    }

    compromissos.push({
        dia,
        mes,
        ano,
        horario,
        descricao,
        importante
    });

    mostrar();
}

function mostrar() {

    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    compromissos.forEach(item => {

        lista.innerHTML += `
            <div class="item ${item.importante ? 'importante' : ''}">
                <strong>📅 ${item.dia}/${item.mes}/${item.ano}</strong><br>
                ⏰ ${item.horario}<br>
                📝 ${item.descricao}<br>
                ${item.importante ? "❗ IMPORTANTE" : ""}
            </div>
        `;
    });

}

function baixarPDF() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("MINHA AGENDA", 20, 20);

    let y = 40;

    compromissos.forEach((item, i) => {

        let texto = `${i+1}. Data: ${item.dia}/${item.mes}/${item.ano}
Horário: ${item.horario}
Compromisso: ${item.descricao}
${item.importante ? "IMPORTANTE" : ""}`;

        doc.text(texto, 20, y);
        y += 30;
    });

    doc.save("agenda.pdf");
}