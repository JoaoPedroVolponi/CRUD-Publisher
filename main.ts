import app from "./app";

function main() { 
    app.listen(3030, 'localhost', () => { 
        console.log('Sever rodando na porta: 3030')
    })
}

main()