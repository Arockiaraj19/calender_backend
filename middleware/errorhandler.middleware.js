

const errorHandler =(error, req, res,next) => {
     res.status(error.status || 500).send(JSON.stringify({
         error: {
             status: error.status || 500,
             message: error.message,
         },
     }))
 }


export default errorHandler;