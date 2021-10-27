import { UserViewModel } from "./userViewModel";

export class StoryViewModel {

    storyTitle ?: string;
    storyCategory ?: string;
    storyAuthor ?: UserViewModel;
    includesTrigger ?: boolean;

    storyImagePath ?: string; 
    storyText ?: string;    
}