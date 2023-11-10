export interface Credential {
    username: String,
    password: String
}

export const defaultCredential: Credential = {
    username: new String(),
    password: new String()
}