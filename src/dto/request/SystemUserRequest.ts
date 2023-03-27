
export interface SystemUserRequest {
    id: string;
    name: string;
    surname: string;
    date_of_birth: Date;
    email: string;
    password: string;
    salt: string; 
    id_type: string;
}