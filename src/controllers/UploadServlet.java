package controllers;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.lang3.RandomStringUtils;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * Created by lecad-100 on 01/06/17.
 */
@WebServlet(name = "Upload", urlPatterns = "/Upload")
public class UploadServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request,
                          HttpServletResponse response) throws ServletException, IOException {

        String name = "" ;
        System.out.println("Entrou aqui");
        if (ServletFileUpload.isMultipartContent(request)) {
            try {
                String FILE_PATH =  getServletContext().getInitParameter("file-upload");

                DiskFileItemFactory diskFileItemFactory = new DiskFileItemFactory();
                ServletFileUpload fileUpload = new ServletFileUpload(diskFileItemFactory);

                List<FileItem> multiparts = fileUpload.parseRequest(request);
                for(FileItem item: multiparts) {
                    if(!item.isFormField()) {
                        String fileName = item.getName();
                        String ext = fileName.substring(fileName.lastIndexOf(".")+1);
                        name = String.format("%s.%s", RandomStringUtils.randomAlphanumeric(8), ext);
                        item.write(new File(String.format("%s%s", FILE_PATH, name)));
                    }
                }
                System.out.println("Arquivo carregado com sucesso = "+name);

            } catch (Exception ex) {
                System.out.println(" Upload de arquivo falhou devido a "+ ex);
            }

        }
    }
}
