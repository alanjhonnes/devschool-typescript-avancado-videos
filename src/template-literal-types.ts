export const Hello = `Hello`
export const World = 'World'
export const HelloWorld = `${Hello}  ${World}` as const

export type Hello = `Hello`;
export type World = `World`;
export type HelloWorld = `${Hello} ${World}`;




export type Size = 'small' | 'medium' | 'large';
export type Icon = 'user' | 'www' | 'checkmark'

export type IconSize = `${Icon}-${Size}`;



// types auxiliáres nativos do typescript
export type IconUppercase = Uppercase<Icon>;
export type IconLowercase = Lowercase<IconUppercase>;
export type IconCapitalized = Capitalize<Icon>;
export type IconUnCapitalized = Uncapitalize<IconCapitalized>;

export type User = {
    id: number;
    name: string;
}

export type UserOnChangedProps = `${keyof User}Changed`;

export type UserOnChangedEvent = {
    [event in UserOnChangedProps]: Function
}

export type UserOnChangedEvent2 = {
    [P in keyof User as `${P}Changed`]: (value: User[P]) => void
}

export type UserChange = UserOnChangedEvent2<User>
