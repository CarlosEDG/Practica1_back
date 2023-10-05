function dividirEnChars(contrasena: string): string[] {
    return contrasena.split('')//seperar en chars
  }
  
  function tieneLetras(contrasena: string[]): boolean {
    return contrasena.some(c => /[a-zA-Z]/.test(c)) //mirar si hay alguna letra
  }
  
  function tieneNumeros(contrasena: string[]): boolean {
    return contrasena.some(c => /[0-9]/.test(c)) //mirar si hay algun numero 
  }
  
  function tieneTresNumerosSeguidos(contrasena: string[]): boolean {
    const joinedPassword = contrasena.join('')
    const consecutiveNumbers = joinedPassword.match(/\d{3,}/g) //mirar si hay 3 numbers seguidos  
    return !!consecutiveNumbers
  }
  
  function tieneCaracterEspecial(contrasena: string[]): boolean {
    return contrasena.some(c => /[!@#$%^&*(),.?":{}|<>]/.test(c))//mirar si en la contraseña hay alguno de esos caracteres
  }
  
  const contrasena = 'lasuperpassword12bb12?'
  const caracteres = dividirEnChars(contrasena)
  let puntos=0
  
  if(caracteres.length>20)puntos=puntos+2
  if(caracteres.length<10)puntos--
  if(tieneLetras(caracteres)&&tieneNumeros(caracteres))puntos++
  if(tieneTresNumerosSeguidos(caracteres))puntos--
  if(tieneCaracterEspecial(caracteres))puntos++
  
  console.log('Contraseña:', contrasena)
  console.log('Array de caracteres:', caracteres)
  console.log('Tiene letras:', tieneLetras(caracteres))
  console.log('Tiene números:', tieneNumeros(caracteres))
  console.log('Tiene tres números seguidos:', tieneTresNumerosSeguidos(caracteres))
  console.log('Tiene carácter especial:', tieneCaracterEspecial(caracteres))
  console.log('Contraseña de nivel: ', puntos)  