export default function ({ next, store, router }) {
    const access_roles = ["Admin", "SuperAdmin"]
    const user_role = store.state.user.role
    const hasRole = () => access_roles.includes(user_role)

    if (!hasRole()) {
        console.log("PIZDA")
        return router.push('/pages/login?access=false')
        // throw new Error('AAAAAAAA')
    }
    return next()
}