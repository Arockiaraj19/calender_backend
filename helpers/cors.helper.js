 import cors from 'cors'

const setupCors=(app)=>{
    app.use(cors());
}

 export default setupCors;