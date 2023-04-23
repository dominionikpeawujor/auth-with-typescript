// import passportLocal from 'passport-local';
// const LocalStrategy = passportLocal.Strategy;
// import bcrypt from 'bcrypt';

// function initialize(passport: any) {
//     const authenticateUsers = async (email:string, password: string, done: any) => {
//         const user = getUserByEmail(email);
//         if(user == null){
//             return done(null, false, ({message: "No use found with that email"}));
//         }
//         try {
//             if(await bcrypt.compare(password, user.password)){
//                 return done(null, user);
//             }
//         } catch (error) {
//             console.log(error);
//             return done(error);
//         }
//     }
//     passport.use(new LocalStrategy({usernameField: 'email'}));
//     passport.serializeUser((user,done)=> {})
//     passport.deserializeUser((id,done)=> {})
// }

// module.exports = initialize;