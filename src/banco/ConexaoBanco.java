package banco;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Created by lecad-100 on 29/05/17.
 */
public class ConexaoBanco {

    private static ConexaoBanco con;
    private static Connection conexao = null;

   private ConexaoBanco() {
       try{

               Class.forName("com.mysql.jdbc.Driver");
               conexao = DriverManager.getConnection("jdbc:mysql://localhost/financeiro", "root", "utfpr");

       }catch(ClassNotFoundException ex){
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
   }

    public static ConexaoBanco conectar(){

      return con == null ? new ConexaoBanco() : con;

    }

    public Connection getCon() {
        return conexao;
    }
}
