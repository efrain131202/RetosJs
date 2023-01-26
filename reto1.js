function wrapping(gifts) {
    return gifts.map((v) => {
      let charCount = Array.from(v).length + 2
      var envoltorio = ""
      for (var i = 0; i < charCount; i ++){
        envoltorio = envoltorio + "*"
      }
      return envoltorio + "\n*" + "" + v + "*\n" + envoltorio
    })
  }