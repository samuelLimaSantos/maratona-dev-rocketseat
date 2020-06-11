//Configurando o servidor
const express = require("express")
const server = express()
const db = require("./database/db");

server.use(express.static("public"));

const nunjucks = require("nunjucks");
nunjucks.configure( "public/view", {
    express: server,
    noCache: true,
})

/*server.get("/", (request, response) => {
    return response.render("index.html", {teste: "rola"});
})*/

// configurar o servidor para apresentar arquivos estátitocs



//habilitar body do formulário
server.use(express.urlencoded({ extended: true}))




//configurar a apresentação da página
server.get("/", function(req, res) {
    
    
    db.all(`SELECT * FROM donors`, function(err, rows) {
        if(err) {
            console.log(err);
        }

        return res.render("index.html", {donors: rows})

    });


    
})


server.post('/', function(req, res) {
    //pegar dados do formulário.
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood 
    
    

    

    //Se o name for vazio
    //OU o email for vazio
    //OU o blood for vazio
    
    db.run(`INSERT INTO donors(
        name,
        email,
        blood
    ) VALUES(
        '${name}',
        '${email}',
        '${blood}'
    );`, function(err) {
        if (err) {
            console.log(err);
        }
        console.log("Deu certo carai");
        return res.render("sucess.html");
    });

    
    
    
   

})


// ligar o servidor e permitir o acesso na porta 3000
server.listen(3000, function() {
    console.log("iniciei o servidor.")
})

