import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
//Handle catch async error
const handleCatchError = (func: (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => void) => {
	return (req: NextApiRequest, res: NextApiResponse, next: NextApiHandler) => {
		const asyncFunc = new Promise((resolve) => {
			resolve(func(req, res, next))
		})

		asyncFunc.catch((error) => {
			console.log(error);
			
			let statusCode = 500
			let message = 'Hệ thống xảy ra vấn đề lỗi.'

            //Define error
            //Handle castError
            const nameError = error.name;

			if (nameError === 'CastError') {
                message = `Resource not found.`;
                statusCode = 400;
              }
        
              //Handling Mongoose validation Error
              if (nameError === 'ValidationError') {
                const messageError = Object.values(error.errors).map((value: any) => value.message)[0];
                message = messageError;
                statusCode = 400;
              }
        
              //Hand Mongoose duplicate key errors
              if (error.code === 11000) {
                const messageError = `Dữ liệu đã tồn tại trong hệ thống.`;
                statusCode = 400;
                message = messageError;
              }
        
              //Handling wrong JWT error
              if (nameError === 'JsonWebTokenError') {
                const messageError = `JSON Web Token is invalid. Try Again!!!`;
                statusCode = 400;
                message = messageError;
              }
        
              //Handling Expored JWT error
              if (nameError === 'TokenExpiredError') {
                const messageError = `JSON Web Token is invalid. Try Again!!!`;
                statusCode = 400;
                message = messageError;
              }

			//Res error
			return res.status(statusCode).json({
				code: statusCode,
				success: false,
				message,
			})
		})
	}
}

export default handleCatchError
