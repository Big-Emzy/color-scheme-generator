let revealColors = ''
const selectTheme = document.getElementById('colors')

document.getElementById('btn').addEventListener('click', function(){
    const hex = document.querySelector('#theme-logo')
    const trimedHex = hex.value.slice(1)
        fetch(`https://www.thecolorapi.com/scheme?hex=${trimedHex.toUpperCase()}&mode=${selectTheme.value}&count=6`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                      const colorOutline = data.colors.map(element => {
                            return element.hex.value
                    }) 
                    colorOutline.shift()  
                    colorOutline.forEach(colors => {
                    revealColors += `
                            <div class="color-tile">
                                <div class="color-box" style="background-color: ${colors};"></div>
                                <div class="color-code" id="colorCode">${colors}</div>
                            </div>
                    `
                return revealColors
              })

              document.getElementById('color-tile-container').innerHTML = revealColors
            })   
       revealColors = ''
})

document.addEventListener('click', function handleCopy(e) {
    if (e.target.id === 'colorCode') {
        const textToCopy = e.target.innerText
        navigator.clipboard.writeText(textToCopy)
        alert("Copied the text: " + textToCopy)
    }
})

