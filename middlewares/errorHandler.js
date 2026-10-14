export const errorHandler = (error, req, res, next) => {
    if(error.name === "LIMIT_FILE_SIZE"){
        return res.status(400).json({
            success: false,
            message: "File size is too large. Maximum size allowed is 5MB."
        });
    }
    return res.status(500).json({
        success: false,
        message: error.message || 'Internal Server Error'
    });
}