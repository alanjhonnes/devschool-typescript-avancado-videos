export interface GuestUser {
    type: 'guest';
    name: string;
}

export interface AuthenticatedUser {
    type: 'user';
    id: string;
    name: string;
}

export type User = GuestUser | AuthenticatedUser;

// Essa função garante que o retorno seja um array de usuários autenticados
export function getAuthenticatedUsers(users: User[]): AuthenticatedUser[] {
    return users.filter(isAuthenticatedUser);
}

// Altere o retorno da função abaixo para virar um type-guard que valide que se o retorno da função for "true", o user é um LoggedInUser
export function isAuthenticatedUser(user: User): user is AuthenticatedUser {
    return user.type === 'user';
}
