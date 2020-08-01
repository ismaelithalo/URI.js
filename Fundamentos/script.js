var input = require('fs').readFileSync('dev/stdin', 'utf-8');
//require: importaço de modulos; fs: file system 
//readFileSync: leitura sincrona de arquivos(nome do arquivo, sistema de codigo)

var [A,B] = input.split(" ").map(num => parseInt(num));
// split vai quebrar o conteudo do arquivo em pequenos elementos com seu tipo selecionado pelo parametro    
// map pega a funçao estabelecidade e passa por cada elemento do array
//ParseInt ou Number transforma a string recebida em tipo number

console.log(A, typeof A);
//comando de visualizaçao ou saida