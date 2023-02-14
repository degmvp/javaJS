const objs = [
    {
        nome: 'Degmar',
        idade: 76,
        estudando: true,
        detalhes_prof: {
            profissao: 'programador',
            database: 'dba senior'
        },
        hobbies: ['programar','estudar','xadrez'],
    },
    {
        nome: 'Pepi',
        idade: 67,
        estudando: true,
        detalhes_prof: {
            profissao: 'programador',
            database: 'dba pleno'
        },
        hobbies: ['programar','tenis','vinho'],

    },
    ]
    // JSON
    // Converte objeto para json
    const jsonData = JSON.stringify(objs)

    console.log(jsonData)
    console.log(typeof jsonData)
    
    // Converter json para objeto javacript

    const objData = JSON.parse(jsonData)

    console.log(objData)
    console.log(typeof objData)

    console.log('------------------------------------------------------')
    objData.map((zematuto)=>{
        console.log(zematuto.nome)
        console.log(zematuto.detalhes_prof)
        console.log('------------------------------------------------------')
    })
