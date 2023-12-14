const tipo= d3.group(r, r => r.valor);

let ticks = tipo.keys();
console.log(ticks);
