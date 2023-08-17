const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener("click", e => {
                    e.preventDefault()
                    const url = link.getAttribute("href")
                    Router.go(url)
            })
        })
        //Event handler for URL Change
        window.addEventListener("popstate", e => {
            Router.go(e.state.route, false)
        })

        //Check the initial URL
        Router.go(location.pathname)
    },
    go: (route, addToHistory=true) => {
        if(addToHistory) {
            history.pushState({route}, "", route)
        }
        let pageElement = null
        switch(route) {
            case "/":
                pageElement = document.createElement('menu-page')
                pageElement.textContent = "Menu"
                break
            case "/order":
                pageElement = document.createElement('order-page')
                pageElement.textContent = "Your order"
                break
            default: 
                if(route.startsWith("/product-")) {
                    pageElement = document.createElement('details-page')
                    pageElement.textContent = "details"
                    const paramId = route.substring(route.lastIndexOf("-")+1)
                }
        }
        if(pageElement) {
            const cache = document.querySelector("main")
            cache.innerHTML = ""
            cache.appendChild(pageElement)
            window.scrollX = 0
            window.scrollY = 0
        } 
       
    }
}

export default Router