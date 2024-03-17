function introduction(name) {
    // code to be executed
    return `Hi, my name is ${name}.`;
  }
function introductionWithLanguage(name, language){
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

  // code to be executed
  function introductionWithLanguageOptional(name = "Mercy", language = "JavaScript"){
    return  `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
  