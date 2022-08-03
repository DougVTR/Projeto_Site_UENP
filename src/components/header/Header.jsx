import './header.css'
export function Header() {
    var teste = "Douglas Vitor"
    return (

        <header>
            <div id="foto_Perfil">
                <img src="" alt="Foto de perfil" />
            </div>
            <div id="boas_Vindas" name={"Bem vindo" + {}}>Bem vindo {teste}</div>
            <div id="logo_Curso"><img src="" alt={"Logo do curso"} name={"Logo do curso"} /></div>
            <div id="logo_UENP"><img src="" alt="Logo da Universidade Estadual do Norte do Paraná" name="Logo da Universidade Estadual do Norte do Paraná" /></div>
            <nav id="menu_Navegacao" name="Menu de Navegação">
                <ul id="menu" name="Menu de Navegação">
                    <li className="botao_Menu" id="botao_Perfil" name="Botão de menu de perfil"><a className='link_Menu' href="#">Perfil</a>
                        <ul className='ul_Informacoes' name="Informações do perfil">
                            <li className='li_Secundario'><a href="#"> Atividades Complementares</a></li>
                            <li className='li_Secundario'><a href="#">Atividades Estudantis</a></li>
                            <li className='li_Secundario'><a href="#">Boletins</a></li>
                            <li className='li_Secundario'><a href="#">Caracterização Socioeconômica</a></li>
                            <li className='li_Secundario'><a href="#">Dados Acadêmicos</a></li>
                            <li className='li_Secundario'><a href="#">Dados Bancários</a></li>
                            <li className='li_Secundario'><a href="#">Dados Pessoais</a></li>
                            <li className='li_Secundario'><a href="#">ENADE</a></li>
                            <li className='li_Secundario'><a href="#">Histórico</a></li>
                            <li className='li_Secundario'><a href="#">Local/Horário de Aula</a></li>
                            <li className='li_Secundario'><a href="#">Medidas Disciplinares / Premiações</a></li>
                            <li className='li_Secundario'><a href="#">Requisitos de Conclusão</a></li>
                            <li className='li_Secundario'><a href="#">TCC/Relatórios</a></li>
                        </ul>
                    </li>
                    <li className="botao_Menu" id="botao_Documentos" name="Botão de menu de documentos"><a className='link_Menu' href="#">Documentos</a>
                        <ul className='ul_Informacoes' name="Informações de Documentos">
                            <li className='li_Secundario'><a href="#">Carteirinha</a></li>
                            <li className='li_Secundario'><a href="#">Comprovante de Dados Acadêmicos</a></li>
                            <li className='li_Secundario'><a href="#">Declaração de Carga Horária Integralizada</a></li>
                            <li className='li_Secundario'><a href="#">Declacração de Matrícula</a></li>
                            <li className='li_Secundario'><a href="#">Declaração de Vínculo</a></li>
                            <li className='li_Secundario'><a href="#">Histórico Parcial</a></li>
                            <li className='li_Secundario'><a href="#">Matriz Curricular</a></li>
                        </ul>
                    </li>

                    <li className="botao_Menu" id="botao_Agenda" name="Botão de menu de Agenda"><a className='link_Menu' href="#">Agenda</a>
                        <ul className='ul_Informacoes' name="Informações de agenda">
                            <li className='li_Secundario'><a href="#">Caixa de Mensagens</a></li>
                            <li className='li_Secundario'><a href="#">Horários</a></li>
                            <li className='li_Secundario'><a href="#">Locais de aula</a></li>
                            <li className='li_Secundario'><a href="#">Minhas Avaliações</a></li>
                            <li className='li_Secundario'><a href="#">Provas</a></li>
                            <li className='li_Secundario'><a href="#">TCC</a></li>
                        </ul>
                    </li>
                    <li className="botao_Menu" id="botao_Informacoes" name="Botão de menu de informações"><a className='link_Menu' href="#">Informações</a>
                        <ul className='ul_Informacoes' name="Informações extras">
                            <li className='li_Secundario'><a href="#">Clinica Médica</a></li>
                            <li className='li_Secundario'><a href="#">Clinica Veterinária</a></li>
                            <li className='li_Secundario'><a href="#">Concurso/PSS</a></li>
                            <li className='li_Secundario'><a href="#">Telefones</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}