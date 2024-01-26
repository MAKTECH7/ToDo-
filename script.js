submit.addEventListener("click", (e)=>{
    e.preventDefault()  // agr reload ho raha hoga toh isse reload nhi hoga
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("ToDo", JSON.stringify([titlec,descc]))
    console.log(e)
    ToDo.innerHTML = `
    <h1>${titlec}</h1>
    <p>${descc}</p>
    `
    title.value = ""
    title.desc = ""
  })
  
  deleteBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.removeItem("ToDo")
    ToDo.innerHTML = ""
  })
  