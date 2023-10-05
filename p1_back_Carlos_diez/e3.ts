function transHora(hora: string): string {
    let aux = hora.slice(0, 2)//guardo las horas
    let aux2 = hora.slice(3, 5)//guardo los minutos
    let auxN: number = +aux //string to number
  
    if (hora.indexOf("pm") > 0) {//busco si hay "pm" para sumarle 12h 
      if (auxN !== 12) { 
        auxN = auxN + 12
      }
    }
    return auxN.toString().concat(aux2)//junto horas(number to string) y minutos
  }
  
  const hora = "04:00 am"
  console.log(transHora(hora)) 
  const hora2 = "10:30 pm"
  console.log(transHora(hora2)) 