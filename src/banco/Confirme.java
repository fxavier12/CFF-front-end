package banco;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 * Created by lecad-100 on 30/05/17.
 */
public class Confirme {

    public static void confirm(Connection con, String email, String senha){
        String sql = "select * from usuario where email = ? and senha = ?;";
        String sql1 = "insert into tipo(aluno,usuario_inscricao) values(?,?)";
        ResultSet r = null;

        try{
            PreparedStatement pmt = con.prepareStatement(sql);
            pmt.setString(1,email);
            pmt.setString(2,senha);
            r = pmt.executeQuery();

            if(r.next()){
                String id = r.getString("inscricao");
                pmt = con.prepareStatement(sql1);
                pmt.setString(1,"true");
                pmt.setString(2,id);
                pmt.executeQuery();

            }else{

            }
        }catch (Exception ex){
            ex.printStackTrace();
        }

    }
}
