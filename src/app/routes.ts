interface Routes {
    publicRoutes: publicRoutes,
    privateRoutes: privateRoutes
}

interface publicRoutes {
    home: string,
    login: string,
    about: string
}

interface privateRoutes {
    dashboard: string,
    profile: string,
    gallery: string
}

const publicRoutes = {
    home: "home",
    login: "login",
    about: "about",

}

const privateRoutes = {
    dashboard: "dashboard",
    gallery: "gallery",
    profile: "profile",
}

export const Routes: Routes = {
    publicRoutes: publicRoutes,
    privateRoutes
}