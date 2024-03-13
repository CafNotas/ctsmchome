// let userLogado = JSON.parse(localStorage.getItem('userLogado'))

// let logado = document.querySelector('#logado')
// logado.innerHTML = `Olá ${userLogado.nome}`

// if (localStorage.getItem('token') == null) {
//     alert('Você precisa estar logado para acessar essa página')
//     window.location.href = '../../index.html'
// }



// function sair() {
//     localStorage.removeItem('token')
//     localStorage.removeItem('userLogado')
//     window.location.href = '../../index.html'
// }


// =================================================================================================

// var home = document.getElementById("h-loc");

// home.onclick = function clear() {
//     let cont = document.getElementById("space");
//     cont.innerHTML = "";
//     cont.innerHTML = `<div class="contact-block">
//     <img class="loc" src="https://maceio.al.gov.br/assets/images/location.svg" alt="">
//     <div class="info-text">
//         <p><strong>Secretaria Municipal de Saúde</strong></p>
//         <p></p>
//         <p>Rua Dias Cabral, 569 - Centro<br>CEP 57020-250 // Telefone: 82 3312-5400<br>Horário de
//             atendimento: segunda a sexta, de 8h às 14h.</p>
//         <p></p>
//     </div>
// </div>

// <div class="contact-block">
//     <img class="loc" src="https://maceio.al.gov.br/assets/images/location.svg" alt="">
//     <div class="info-text">
//         <p><strong>CTSMC</strong></p>
//         <p></p>
//         <p>Av. Juca Sampaio, 620 - Barro Duro<br>CEP 57040-600 // Telefone: 82 3312-5447<br>Horário de
//             atendimento: segunda a sexta, de 7h às 19h.</p>
//         <p></p>
//     </div>
// </div>`
// }

// =================================================================================================

var links = document.getElementById("links");

links.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="content">
    <div class="bt">
        <a class="link-bt" href="https://mail.sms.maceio.al.gov.br/#1" target="_blank">
            <div>
                <img class="logo-op" src="./img/ZIMBRA.png" alt="logo ZIMBRA">
            </div>
        </a>
        <p class="m-title">ZIMBRA</p>
    </div>


    <div class="bt">
        <a class="link-bt" href="https://supe.maceio.al.gov.br/pages/comum/login.faces" target="_blank">
            <div>
                <img class="logo-op" src="./img/logo_prefeitura.png" alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">SUPE</p>
    </div>

    <div class="bt">
        <a class="link-bt"
            href="http://www.licitacao.maceio.al.gov.br/pesquisar?modalidade=1&ano=2019&numero=95&objeto=&orgao=&cota=&status="
            target="_blank">
            <div>
                <img class="logo-op" src="./img/LIC.png" alt="logo Alic">
            </div>
        </a>
        <p class="m-title">LICITAÇÕES</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://www.diariomunicipal.com.br/maceio/adesao" target="_blank">
            <div>
                <img class="logo-op" src="./img/logo_prefeitura.png" alt="logo prefeitura">
            </div>
        </a>
        <p class="m-title">DIÁRIO OFICIAL</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="http://scaweb.saude.gov.br/scaweb/" target="_blank">
            <div>
                <img class="logo-op" src="./img/logoHorus.jpg" alt="logo Horus">
            </div>
        </a>
        <p class="m-title">HÓRUS</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://consultas.anvisa.gov.br/#/medicamentos/" target="_blank">
            <div>
                <img class="logo-op" src="./img/ANVISA.png" alt="logo Anvisa">
            </div>
        </a>
        <p class="m-title">ANVISA MEDICAMENTOS</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://consultas.anvisa.gov.br/#/saude/" target="_blank">
            <div>
                <img class="logo-op" src="./img/ANVISA.png" alt="logo Anvisa">
            </div>
        </a>
        <p class="m-title">ANVISA CORRELATOS</p>
    </div>
</div>`;
}

// =================================================================================================

var notas = document.getElementById("notas");

notas.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1k_uLfMnK54yVOdtXqXGyRjQci26EpbYrCPLHKCCcsek/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE PROCESSOS</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1vVeHCPjhsgQHqvi018Kl4SmBvOG3EG9LWtYmr8lk40I/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE LICITAÇÕES</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1Kfvj683CH2Dim3jFR5WbQWUMU3V1hGWhKiaFQFybJnc/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE ORDENS DE FORNECIMENTO</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1qnzvqzIOjq6YIdEVTE_EP46mrLHFuk-8jMXe1cs0dwg/edit#gid=1040219886" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE ESTOQUE E AQUISIÇÃO</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/a618f8ec-c47e-4045-a14c-46457bec4205/page/y76jD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/DASHBOARD.png"
                    alt="logo DASHBOARD">

            </div>
        </a>
        <p class="m-title">DASHBOARD DE FORNECIMENTO</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/9e61566a-2df4-4b53-bd75-90b615c1a589/page/awzqD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/ENTREGA.png"
                    alt="logo ENTREGA">

            </div>
        </a>
        <p class="m-title">RELATÓRIO DE RECEBIMENTO</p>
    </div>
    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/reporting/8178da71-f0f8-4d74-be55-c86e78c068bb/page/EijkD" target="_blank">
        <div>
            <img class="logo-op"
                src="./img/AGENDA.png"
                alt="logo ENTREGA">

        </div>
    </a>
    <p class="m-title">LISTA DE ENTREGAS AGENDADAS</p>
</div>
    </div>`
}

// =================================================================================================

var logistc = document.getElementById("log");

logistc.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/12nt-Tvl4Jpzye9f2D1ieC2MKq6O6jtWgUPUWH0IK5zE/edit?pli=1#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">ROTA DIÁRIA</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1DZemm495IREQBm6mOTpERTstRZlPV0aHND8O2s5HVRo/edit#gid=1426336719" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">PRODUTIVIDADE</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/10rcWazxcCs3pNh6mOXxaKS1Jb6WyAyh7xU6N8tQeVnU/edit#gid=1036754280" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">INVENTÁRIO</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1X2wMVIRl5KsRn_tC84ebAASmNhzRFwu_vrIGomIjzI8/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo prefeitura">

            </div>
        </a>
        <p class="m-title">CONTROLE DE B.E.B.R.</p>
    </div>

    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/reporting/38de69fb-f531-4a4a-b509-eb8721dd13fe/page/orwsD" target="_blank">
        <div>
            <img class="logo-pln"
                src="./img/logistica.png"
                alt="logo prefeitura">

        </div>
    </a>
    <p class="m-title">INFORME DE ROTA</p>
</div>

</div>`;
}

// =================================================================================================

var farm = document.getElementById("farm");

farm.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content"> 
<div class="bt">
    <a class="link-bt" href="https://pnm.sms.maceio.al.gov.br/" target="_blank">
        <div>
            <img class="logo-pnm"
                src="./img/pnm.jpg"
                alt="logo PNM">

        </div>
    </a>
    <p class="m-title">SISTEMA DE INFORMAÇÕES P.N.M</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/116msvyNNo6VqtZf26EyI0tiz6qMUqCfHfgddi7FScK8/edit#gid=1141012546" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">CTSMC - COMPONENTE ESTRATÉGICO</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1E9WnXNCCtgfXAoG1-v1V3jVPMqFV1JZC1SdaXaGcm5Q/edit#gid=835047668" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">RESPONSABILIDADE TÉCNICA</p>
</div>

<div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1LD-7n8RqQolXptRfBQieIXgkJ_v22xLt_UTCkJWPLcA/edit#gid=280970307" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">MEDICAMENTOS PARA PARKINSON</p>
</div>

</div>`;
}

var farm = document.getElementById("digit");

farm.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1MXVpd9fTkTyuZ5Gnrp2j9vKnCpP4YCyNTk23XNNdnGQ/edit#gid=412418021" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">RECEBIMENTO DE PEDIDOS MENSAIS</p>
        
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1hhpgmirgy0TdOZNdTluateBRj21nHOvUKg0vwR0sRs8/edit#gid=1228655469" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE PEDIDOS MENSAIS</p>
        
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1OUgpBXV8BqdeGITg96sOZa0jc6kLHTYhDNYV2iaJEXo/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE PACIENTES - CURATIVOS</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1BsyGmwzFiha4hOE0LijC3mITu9YHRr5i2pYvw0gVScA/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CTSMC - DADOS E ESTATÍSTICA</p>
    </div>
    <div class="bt">
    <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1ey5UvYK4HZawcz6A8ogoaruT6l2t4VPjrBEDern_W3U/edit#gid=611076321" target="_blank">
        <div>
            <img class="logo-pln"
            src="./img/logPln.png"
                alt="logo planlha">

        </div>
    </a>
    <p class="m-title">ACOMPANHAMENTO DE PEDIDOS</p>
</div>

    `;
}

var notas = document.getElementById("notas");

notas.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = ` <div class="content">
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1k_uLfMnK54yVOdtXqXGyRjQci26EpbYrCPLHKCCcsek/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE PROCESSOS</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1vVeHCPjhsgQHqvi018Kl4SmBvOG3EG9LWtYmr8lk40I/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE LICITAÇÕES</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1Kfvj683CH2Dim3jFR5WbQWUMU3V1hGWhKiaFQFybJnc/edit#gid=0" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE ORDENS DE FORNECIMENTO</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1qnzvqzIOjq6YIdEVTE_EP46mrLHFuk-8jMXe1cs0dwg/edit#gid=1040219886" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE ESTOQUE E AQUISIÇÃO</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/a618f8ec-c47e-4045-a14c-46457bec4205/page/y76jD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/DASHBOARD.png"
                    alt="logo DASHBOARD">

            </div>
        </a>
        <p class="m-title">DASHBOARD DE FORNECIMENTO</p>
    </div>
    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/9e61566a-2df4-4b53-bd75-90b615c1a589/page/awzqD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/ENTREGA.png"
                    alt="logo ENTREGA">

            </div>
        </a>
        <p class="m-title">RELATÓRIO DE RECEBIMENTO</p>
    </div>
    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/reporting/8178da71-f0f8-4d74-be55-c86e78c068bb/page/EijkD" target="_blank">
        <div>
            <img class="logo-op"
                src="./img/AGENDA.png"
                alt="logo ENTREGA">

        </div>
    </a>
    <p class="m-title">LISTA DE ENTREGAS AGENDADAS</p>
</div>
    </div>`
}

// =================================================================================================

var logistc = document.getElementById("coord");

logistc.onclick = function clear() {
    let cont = document.getElementById("space");
    cont.innerHTML = "";
    cont.innerHTML = `<div class="content">
    
    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/54f46540-4108-4e97-827a-cdde14149667/page/YQxsD" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/call.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">STATUS DE <br> COBRANÇAS</p>
    </div>
    

    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/a618f8ec-c47e-4045-a14c-46457bec4205/page/y76jD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/DASHBOARD.png"
                    alt="logo DASHBOARD">

            </div>
        </a>
        <p class="m-title">DASHBOARD DE FORNECIMENTO</p>
    </div>

    <div class="bt">
        <a class="link-bt" href="https://lookerstudio.google.com/reporting/9e61566a-2df4-4b53-bd75-90b615c1a589/page/awzqD" target="_blank">
            <div>
                <img class="logo-op"
                    src="./img/ENTREGA.png"
                    alt="logo ENTREGA">

            </div>
        </a>
        <p class="m-title">RELATÓRIO DE RECEBIMENTO</p>
    </div>
    <div class="bt">
    <a class="link-bt" href="https://lookerstudio.google.com/reporting/8178da71-f0f8-4d74-be55-c86e78c068bb/page/EijkD" target="_blank">
        <div>
            <img class="logo-op"
                src="./img/AGENDA.png"
                alt="logo ENTREGA">

        </div>
    </a>
    <p class="m-title">LISTA DE ENTREGAS AGENDADAS</p>
</div>

<div class="bt">
<a class="link-bt" href="https://lookerstudio.google.com/reporting/38de69fb-f531-4a4a-b509-eb8721dd13fe/page/orwsD" target="_blank">
    <div>
        <img class="logo-pln"
            src="./img/logistica.png"
            alt="logo prefeitura">

    </div>
</a>
<p class="m-title">INFORME <br> DE ROTA</p>
</div>

<div class="bt">
        <a class="link-bt" href="https://docs.google.com/spreadsheets/d/1qnzvqzIOjq6YIdEVTE_EP46mrLHFuk-8jMXe1cs0dwg/edit#gid=1040219886" target="_blank">
            <div>
                <img class="logo-pln"
                    src="./img/logPln.png"
                    alt="logo PLANILHA">

            </div>
        </a>
        <p class="m-title">CONTROLE DE ESTOQUE E AQUISIÇÃO</p>
    </div>

    <div class="bt">
<a class="link-bt" href="https://docs.google.com/spreadsheets/d/1E9WnXNCCtgfXAoG1-v1V3jVPMqFV1JZC1SdaXaGcm5Q/edit#gid=835047668" target="_blank">
    <div>
        <img class="logo-pln"
        src="./img/logPln.png"
            alt="logo PLANILHA">

    </div>
</a>
<p class="m-title">RESPONSABILIDADE TÉCNICA</p>
</div>

    </div>`;
}
