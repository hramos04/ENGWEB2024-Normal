# Guia de explicação do trabalho realizado no teste de Engenharia Web

## 1.1 Setup
    Para ter o dataset em formato .json, recorri a uma ferramenta da web que converte ficheiro do formato.csv para formato .json. O dataset foi analisado e não continha nenhum erro, pelo que o passo seguinte foi importá-lo para o mongodb. 

    Comando para importar para o mongodb: 
    mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray

## 1.3 API de dados
    1. Execução do comando: npx express-generator --no-view ex1
    2. Instrução para iniciar a API de dados:
        1. Ir para a directoria "ex1"
        2. Executar o comando "npm install"
        3. Executar o comando "npm install mongoose"
        4. Executar o comando "npm start"
        5. A API estará a funcionar na porta 16000
    
## 2: Contratos (Interface)
    1. Execução do comando: npx express-generator --view=pug ex2
    2. Instrução para iniciar a Interface:
        1. Ir para a directoria "ex2"
        2. Executar o comando "npm install"
        3. Executar o comando "npm install axios"
        4. Executar o comando "npm start"
        5. A Interface estará a funcionar na porta 16001
