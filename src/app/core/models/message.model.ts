import { IUser } from "./user.model";

export interface IMessage {
    id: string,
    user: IUser,
    text: string,
}