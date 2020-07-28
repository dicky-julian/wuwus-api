module.exports = {
    setResponse: ((res, status, message, data) => {
        return res.status(status).json({
            status: status,
            message: message,
            data: data || 'No Provide a Data'
        })
    })
}