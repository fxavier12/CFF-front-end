package controllers;

import banco.ConexaoBanco;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * Created by lecad-100 on 31/05/17.
 */
@WebServlet(name = "GravarImagen", urlPatterns = "/GravarImagen")
@MultipartConfig
public class GravarImagen extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        HttpSession sessao = request.getSession();
        System.out.println("Bruno legal........");
        final Part filePart = request.getPart("file");
        final String fileName = getFileName(filePart);
        String email = sessao.getAttribute("email").toString();


        ConexaoBanco con = ConexaoBanco.conectar();
        Connection c = con.getCon();
        String sql = "UPDATE usuario SET foto = ? WHERE email = ?";

        InputStream fis = filePart.getInputStream();

        try {
            PreparedStatement pst = c.prepareStatement(sql);
            pst.setBlob(1, fis);
            pst.setString(2, email);
            pst.executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
        }


    }

    private String getFileName(final Part part) {
        final String partHeader = part.getHeader("content-disposition");

        for (String content : part.getHeader("content-disposition").split(";")) {
            if (content.trim().startsWith("filename")) {
                return content.substring(
                        content.indexOf('=') + 1).trim().replace("\"", "");
            }
        }
        return null;
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
