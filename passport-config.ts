import passportLocal from 'passport-local';
const LocalStrategy = passportLocal.Strategy;
import bcrypt from 'bcrypt';

export function initialize(passport: any,getUserByEmail: any, getUserById: any) {
    const authenticateUsers = async (email:string, password: string, done: any) => {
        const user = getUserByEmail(email);
        if(user == null){
            return done(null, false, ({message: "No use found with that email"}));
        }
        try {
            if(await bcrypt.compare(password, user.password)){
                return done(null, user);
            } else {
                return done(null, false, {message: "Password incorrect"})
            }
        } catch (error) {
            console.log(error);
            return done(error);
        }
    }
    passport.use(new LocalStrategy({usernameField: 'email'}, authenticateUsers));
    passport.serializeUser((user: { id: any; },done: (arg0: null, arg1: any) => any)=> done(null, user.id))
    passport.deserializeUser((id: any, done: (arg0: null, arg1: any) => any)=> {
        return done(null, getUserById(id))
    })
}
