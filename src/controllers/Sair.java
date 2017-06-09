package controllers;

import banco.ConexaoBanco;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;

/**
 * Created by lecad-100 on 30/05/17.
 */
@WebServlet(name = "Sair", urlPatterns = "/Sair")
public class Sair extends HttpServlet {

     protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         HttpSession secao = request.getSession();
         secao.invalidate();

         try {
             ConexaoBanco.conectar().getCon().close();
         } catch (SQLException e) {
             e.printStackTrace();
         }

         response.sendRedirect("index.html");
     }
}
