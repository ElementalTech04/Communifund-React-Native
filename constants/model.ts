export class UserData {
    userId: string
    firstName: string
    lastName: string
    email: string
    phoneNumber: string

    constructor(userId: string, firstName: string, lastName: string, email: string, phoneNumber: string) {
        this.userId = userId
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phoneNumber = phoneNumber

    }
}