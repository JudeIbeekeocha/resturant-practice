import "./styles/menu.css";

async function fetchMenu(){
    let menu;
    try{
        const response = await fetch('http://127.0.0.1:5001/menu')
        menu = await response.json()
        // console.log(menu)
        // console.log(typeof menu)

    }catch (error){
        console.log('Error fetching the menu:', error)
    }
    return menu
}

const menu = await fetchMenu()


export function renderMenuPage(){
    let appetizerHTML = ``
    let entreeHTML = ``
    let desertHTML = ``
    const contentPage = document.querySelector('#content')

    const menuContent = document.createElement('div')
    menuContent.classList.add('menu-content')

    const menuText = document.createElement('h3')
    menuText.classList.add('menu-title')
    menuText.textContent = 'Lux Épicure Fine Dining Menu'

    const menuItems = document.createElement('div')
        menuItems.classList.add('menu-items')
    
    const appetizers = document.createElement('div')
        appetizers.classList.add('appetizers')
    
    const entree = document.createElement('div')
        entree.classList.add('entree')

    const desert = document.createElement('div')
        desert.classList.add('desert')
    



    contentPage.appendChild(menuContent)

    menuContent.appendChild(menuText)
    menuContent.appendChild(menuItems)

    menuItems.appendChild(appetizers)
    menuItems.appendChild(entree)
    menuItems.appendChild(desert)
    menu.forEach((item)=>{
        if (item.type === 'appetizer'){
            appetizerHTML += `
            <div class="item-container">
                  <div class="item-name">${item.name} - A</div>
                  <div class="item-description">${item.description}</div>
                  <div class="item-price">$${item.price}</div>
                </div>
            `
            
            appetizers.innerHTML = appetizerHTML
        } else if (item.type === 'entree'){
            entreeHTML += `
            <div class="item-container">
                  <div class="item-name">${item.name} - E</div>
                  <div class="item-description">${item.description}</div>
                  <div class="item-price">$${item.price}</div>
                </div>
            `
        entree.innerHTML = entreeHTML

        } else if (item.type === 'desert'){
            desertHTML +=`
            <div class="item-container">
                  <div class="item-name">${item.name} - D</div>
                  <div class="item-description">${item.description}</div>
                  <div class="item-price">$${item.price}</div>
                </div>
            `
            desert.innerHTML = desertHTML
        }
    })
}

