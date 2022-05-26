function checaAno(year: number): boolean {
    
    
     if (year % 4 == 0 && year % 100 != 0) {
        return true;
      } if (year % 400 == 0) {
        return true;
      } else {
        return false;
      }
    } 
    console.log("Resultado", checaAno(2000));