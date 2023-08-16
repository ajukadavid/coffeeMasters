const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener("click", e => {
                    e.preventDefault()
                    console.log('Link clicked')
            })
        })
    },
    go: (route, addToHistory=true) => {
        console.log(`Going to ${route}`)
    }
}

export default Router