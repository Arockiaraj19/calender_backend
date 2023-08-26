import bodyParser from "body-parser"

const setupBodyParser=(app)=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  
}

 export default setupBodyParser;