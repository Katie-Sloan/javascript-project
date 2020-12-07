module.exports = {
    devServer: {
        port: 8080, 
        proxy:"http://localhost:8080/api/"
    }
}