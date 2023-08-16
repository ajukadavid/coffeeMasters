const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener("click", e => {
                    e.preventDefault()
                    const url = link.getAttribute("href")
                    Router.go(url)
            })
        })
        Router.go(location.pathname)
    },
    go: (route, addToHistory=true) => {
        if(addToHistory) {
            history.pushState({route}, "", route)
        }
        let pageElement = null
        switch(route) {
            case "/":
                pageElement = document.createElement('h1')
                pageElement.textContent = "Menu"
                break

            case "/order":
                pageElement = document.createElement('h1')
                pageElement.textContent = "Your order"
                break
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