const axios = require('axios');

export class UserService {

    public async getUsers() {
        return await axios.get('/api/users');
    }

    public async getContacts() {
        return await axios.get('/api/contacts');
    }

    public async getAddresses() {
        return await axios.get('/api/addresses');
    }

    public async getUserInfo() {

        try{

            const users = await this.getUsers();
            const contacts = await this.getContacts();
            const addresses = await this.getAddresses();
            const result: any = [];
        
            users.data.map((user: any) => {
            result.push({
                ...user, 
                ...contacts.data.find((contact: any) => contact.userId === user.userId), 
                ...addresses.data.find((address: any) => address.userId === address.userId)})
            });
            
            return result;
            
        }catch(error) {
            return [];
        }
    }
}