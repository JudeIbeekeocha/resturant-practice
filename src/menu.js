import "./styles/menu.css";

const menu = [
    {
        name: 'Crispy Duck Spring Rolls', 
        description: 'Served with hoisin dipping sauce.',
        price: 18,
        type: 'appetizer'
    },
    {
        name: 'Burrata and Heirloom Tomato Salad', 
        description: 'With basil pesto and balsamic reduction.',
        price: 16,
        type: 'appetizer'
    },
    {
        name: 'Seared Scallops', 
        description: 'Paired with a citrus beurre blanc and microgreens.',
        price: 22,
        type: 'appetizer'
    },
    {
        name: 'Grilled Salmon with Lemon Butter Sauce', 
        description: 'Accompanied by roasted asparagus and wild rice pilaf.',
        price: 36,
        type: 'entree'
    },
    {
        name: 'Filet Mignon with Red Wine Reduction', 
        description: 'Served with truffle mashed potatoes and sautéed green beans.',
        price: 48,
        type: 'entree'
    },
    {
        name: 'Wild Mushroom Risotto', 
        description: 'Finished with Parmesan cheese and white truffle oil.',
        price: 28,
        type: 'entree'
    },
    {
        name: 'Dark Chocolate Tart', 
        description: 'Topped with fresh berries and sea salt caramel.',
        price: 14,
        type: 'desert'
    },
    {
        name: 'Vanilla Bean Crème Brûlée', 
        description: 'With a caramelized sugar crust.',
        price: 12,
        type: 'desert'
    },

]





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

