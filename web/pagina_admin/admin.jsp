<%--
  Created by IntelliJ IDEA.
  User: Sirnande Dos Santos Lima
  Date: 30/05/17
  Time: 12:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE HTML>
<html>
<head>

    <title>Udacity</title>
    <link rel="shortcut icon" href="media/logo-mark.svg">
    <link rel="stylesheet" type="text/css" href="../css/home.css">
    <meta  charset=utf-8"/>

</head>
<body>
<div class="container">
    <div class="azul">
        <img class="imagen" src="../media/udacity_tranparente.png">
        <div class="amarelo">
            <div class="divmenus">
                <ul class="menus">
                    <li>

                        <a href="#">Olá  <c:out value="${nome}"/></a>
                        <ul class="submenus">
                            <li>
                                <form method="POST" action="/Upload" enctype="multipart/form-data" >
                                    <input type="file" name="file" id="file" />
                                    <input type="submit" value="Upload" name="upload" id="upload" />
                                </form>



                                <a href="#"> Trocar foto perfil</a></li>
                            <li><a href="#">Ferramentas</a></li>
                            <li><a href="Sair">Sair</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="menudiv">
        <ul class="menu">
            <li><a href="index.html">Udacity</a>
                <ul class="submenu">
                    <li><a href="">abobrinha</a> </li>
                    <li><a href="">abacate</a></li>
                    <li><a href="">mamao</a>

                    </li>
                </ul>
            </li>

            <c:if test="${tipo != 3}">
                 <li><a href="#">Arquivos</a>
                    <ul class="submenu">
                        <li><a href="#">Incluir Arquivos</a></li>
                        <li><a href="#">Listar Arquivos</a></li>
                        <li><a href="#">Excluir Arquivos</a></li>
                    </ul>
                </li>
            </c:if>

            <li><a href="#">Time line</a>
                <ul class="submenu">
                    <li><a href="#">Ver minha linha do Tempo</a></li>
                    <li><a href="#">Ir data específica</a></li>
                    <li><a href="#">Imprimir</a></li>
                </ul>
            </li>

            <c:if test="${tipo != 3}">
                <li><a href="#">Relatório</a>
                    <ul class="submenu">
                        <li><a href="#">Emitir relatório</a></li>
                        <li><a href="#">Enviar</a></li>
                        <li><a href="#">Criar um Relatorio</a></li>
                    </ul>
                </li>
            </c:if>

        </ul>


    </div>

    <div class="vermelha">
        <ul id="nav" >

            <li><a href="index.htmls">Home</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Meu Curso</a>

                <ul>
                    <li><a href="#">Ir ao Curso</a></li>
                    <li><a href="#">Material</a></li>
                    <li><a href="#">Lista de Cursos Matriulado</a></li>
                </ul>

            </li>
            <li><a href="#">Serviços</a>

                <ul>
                    <li><a href="#">Forúm</a></li>
                    <li><a href="#">Palestras</a></li>
                    <li><a href="#">Falar com um instrutor</a></li>
                </ul>

            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Cursos</a></li>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#">Contato</a></li>

        </ul>
    </div>

    <div class="verde">
        <section class="galeria">
            <img class="foto" src="../media/ERP.jpg">
            <img class="foto" src="../media/foto2.png">
            <img class="foto" src="../media/foto.jpg">
            <img class="foto" src="../media/bnet-bg.jpg">
            <img class="foto" src="../media/cadastrar.jpg">
        </section>

    </div>
    <div class="laranja">
        <div class="caixaLateral">
            <a href="#">
                <img src="media/imagem_caixa2.png" alt="new!">
                <div class="texto">
                    <h6 class="azul tamanho">Novo!</h6>
                    <h5 class="tamanho">Nanodegree Robótica</h5>
                    <p>Candidate-se!</p>
                </div>
            </a>
        </div>

        <div class="caixaLateral lateralAjuste">
            <a href="#">
                <img src="../media/foto.jpg" alt="new!">
                <div class="texto">
                    <h6 class="azul tamanho">Novo!</h6>
                    <h5 class="tamanho">Nanodegree Robótica</h5>
                    <p>Candidate-se!</p>
                </div>
            </a>
        </div>

        <div class="caixaLateral lateralAjuste">
            <a href="#">
                <img src="../media/bnet-bg.jpg" alt="new!">
                <div class="texto">
                    <h6 class="azul tamanho">Novo!</h6>
                    <h5 class="tamanho">Nanodegree Robótica</h5>
                    <p>Candidate-se!</p>
                </div>
            </a>
        </div>

        <div class="caixaLateral lateralAjuste">
            <a href="#">
                <img src="../media/ERP.jpg" alt="new!">
                <div class="texto">
                    <h6 class="azul tamanho">Novo Curso de Controle Financeiro</h6>
                    <h5 class="tamanho">Nanodegree Robótica</h5>
                    <p>Candidate-se!</p>
                </div>
            </a>
        </div>
    </div>

</div>
</body>
</html>