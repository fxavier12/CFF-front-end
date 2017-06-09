package controllers;

import banco.ConexaoBanco;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;

/**
 * Created by lecad-100 on 26/05/17.
 */

@WebServlet(name = "Cadastro", urlPatterns = "/Cadastro")
public class Cadastro extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        PrintWriter writer = response.getWriter();
        String sql = "insert into usuario (nome,email,senha,tipo) values(?,?,?,?)";

        ConexaoBanco con = ConexaoBanco.conectar();
        Connection c = con.getCon();

       // writer.println(""+c.);

        String nome = request.getParameter("nome");
        String email = request.getParameter("email");
        String senha = request.getParameter("password");

        try {
            PreparedStatement pmt = c.prepareStatement(sql);
            pmt.setString(1,nome);
            pmt.setString(2,email);
            pmt.setString(3,senha);
            pmt.setString(4,"3");

            pmt.execute();
            pmt.close();

            response.sendRedirect("index.html");

        }catch (Exception ex){

        }

        writer.println("nome:\t"+nome);
        writer.println("email:\t"+email);
        writer.println("senha:\t"+senha);

        response.sendRedirect("index.html");
    }



}
