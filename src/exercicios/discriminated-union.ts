// Melhore esse tipo utilizando uma união discriminada de tipos mais específicos
// export type User = {
//     type: 'authenticated-user' | 'guest';
//     name: string;
//     email?: string;
//     registered: boolean;
// }
export interface AuthenticatedUser {
    type: 'authenticated-user';
    name: string;
    email: string;
    registered: true;
}

export interface GuestUser {
    type: 'guest';
    name: string;
    registered: false;
}

export type User = AuthenticatedUser | GuestUser

function checkUser(user: User) {
    if (user.registered === true) {
        user.email
    } else {
        user.
    }
}


