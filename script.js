

const hex = document.getElementById('theme-logo')
let colorOutline = []
let revealColors = ''

document.getElementById('btn').addEventListener('click', function(){
    const hex = document.getElementById('theme-logo')
    const selectTheme = document.getElementById('select')
        fetch(`https://www.thecolorapi.com/scheme?hex=${hex.value}mode=${selectTheme.value}&count=6`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                 data.colors.forEach(element => {
                        colorOutline.push(element.hex.value)
                    }) 
                    colorOutline.shift()    
                    colorOutline.forEach(colors => {
                    revealColors += `
                            <div class="color-tile">
                                <div class="color-box" style="background-color: ${colors};"></div>
                                <div class="color-code">${colors}</div>
                            </div>
                    `
                return revealColors
              })

              document.getElementById('color-tile-container').innerHTML = revealColors
            })
       colorOutline = []     
       revealColors = ''
       

})

  