package controllers;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

/**
 * Created by sirnande on 24/04/17.
 */
@WebServlet(name = "PrimeiroTeste", urlPatterns = "/PrimeiroTeste")
public class PrimeiroServlet extends HttpServlet {
    public void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException{
        PrintWriter writer = res.getWriter();
        writer.println("\n\tConexao com banco de dados \n\n");
        writer.println("\tnome\t\tid\n");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection c = DriverManager.getConnection("jdbc:mysql://localhost/teste", "root", "utfpr");
            PreparedStatement p = c.prepareStatement("select * from teste;");
            ResultSet r = p.executeQuery();
            while(r.next()){

                writer.println("\t"+r.getString("nome")+"\t\t"+r.getString("id"));
            }
            c.close();
        }catch(ClassNotFoundException ex){
            writer.println("O drive expecificado nao foi encontrado");
            ex.printStackTrace();
        }
        catch(SQLException ex){

            ex.printStackTrace();
        }
        catch(NoClassDefFoundError ex){
            ex.printStackTrace();
        }catch (Exception ex){
            ex.printStackTrace();
        }

        writer.println("\n\nConexão com banco de dados ........");
        //res.sendRedirect("index.html");

    }
}
