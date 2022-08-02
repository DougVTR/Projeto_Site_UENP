import './header.css'
export function Header() {
    return (
        <header>
            <div id="foto_Perfil">
                <img src="" alt={"Foto de perfil de " + {}} />
            </div>
            <div id="boas_Vindas" name={"Bem vindo" + {}}>Bem vindo { }</div>
            <div id="logo_Curso"><img src="" alt={"Logo do curso de " + {}} name={"Logo do curso de " + {}} /></div>
            <div id="logo_UENP"><img src="" alt="Logo da Universidade Estadual do Norte do Paraná" name="Logo da Universidade Estadual do Norte do Paraná" /></div>
            <nav id="menu_Navegacao" name="Menu de Navegação">
                <ul id="menu" name="Menu de Navegação">


                    <li className="botao_Menu" id="botao_Perfil" name="Botão de menu de perfil"><a href="#">Perfil</a>
                        <ul name="Informações do perfil">
                            <li><a href="#"> Atividades Complementares</a></li>
                            <li><a href="#">Atividades Estudantis</a></li>
                            <li><a href="#">Boletins</a></li>
                            <li><a href="#">Caracterização Socioeconômica</a></li>
                            <li><a href="#">Dados Acadêmicos</a></li>
                            <li><a href="#">Dados Bancários</a></li>
                            <li><a href="#">Dados Pessoais</a></li>
                            <li><a href="#">ENADE</a></li>
                            <li><a href="#">Histórico</a></li> 
                            <li><a href="#">Local/Horário de Aula</a></li>
                            <li><a href="#">Medidas Disciplinares / Premiações</a></li>  
                            <li><a href="#">Requisitos de Conclusão</a></li>   
                            <li><a href="#">TCC/Relatórios</a></li>
                        </ul>
                    </li>

                    <li className="botao_Menu" id="botao_Documentos" name="Botão de menu de documentos"><a href="#">Documentos</a>
                        <ul name="Informações de Documentos">
                            <li><a href="#">Carteirinha</a></li>
                            <li><a href="#">Comprovante de Dados Acadêmicos</a></li>
                            <li><a href="#">Declaração de Carga Horária Integralizada</a></li>
                            <li><a href="#">Declacração de Matrícula</a></li>
                            <li><a href="#">Declaração de Vínculo</a></li>
                            <li><a href="#">Histórico Parcial</a></li>
                            <li><a href="#">Matriz Curricular</a></li>
                        </ul>
                    </li>

                    <li className="botao_Menu" id="botao_Agenda" name="Botão de menu de Agenda"><a href="#">Agenda</a>
                        <ul name="Informações de agenda">
                            <li><a href="#">Caixa de Mensagens</a></li>
                            <li><a href="#">Horários</a></li>
                            <li><a href="#">Locais de aula</a></li>
                            <li><a href="#">Minhas Avaliações</a></li>
                            <li><a href="#">Provas</a></li>
                            <li><a href="#">TCC</a></li>
                        </ul>
                    </li>
                    <li className="botao_Menu" id="botao_Informacoes" name="Botão de menu de informações"><a href="#">Informações</a>
                        <ul name="Informações extras">
                            <li><a href="#">Clinica Médica</a></li>
                            <li><a href="#">Clinica Veterinária</a></li>
                            <li><a href="#">Concurso/PSS</a></li>
                            <li><a href="#">Telefones</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}