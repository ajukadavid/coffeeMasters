const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener("click", e => {
                    e.preventDefault()
                    const url = link.getAttribute("href")
                    Router.go(url)
            })
        })
        //check the initial URL
        Router.go(location.pathname)
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`)
        if(addToHistory) {
            history.pushState({route}, "", route)
        }
    }
}

export default Router