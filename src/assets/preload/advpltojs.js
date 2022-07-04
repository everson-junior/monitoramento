
function(codeType , codeContent) {
    if (codeType === "response") {
      console.log(codeContent)
    } else {
      this.eventTarget.send(codeType, codeContent);
    }
  }