function checaTriangulo(a: Number, b: Number, c: Number): string {

    if (a !== b && b !== c) {
      return "Escaleno";

    } else if (a === b && b === c) {
      return "Equilátero";
      
    } else {
      return "Isósceles";
    }
  }
  console.log( "Resultado",  checaTriangulo(10, 6, 4));