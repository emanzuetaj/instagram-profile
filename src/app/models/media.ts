import { Profile } from './profile';

export class Media {
    filter: string;
    id: string;
    likes: Count;
    comments: Count;
    caption: any;
    images: any;
    link: string;
    tags: string[];
    user: Profile;
    users_in_photo: any[];
}
interface Count {
    count: number;
}