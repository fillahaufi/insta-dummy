/// <reference types="nativewind/types" />

declare type Theme = {
    dark: boolean;
    colors: {
        primary: string;
        secondary: string;
        bgPrimary: string;
        bgSecondary: string;
        text: string;
    };
}

declare type Post = {
	user_id: number;
	post_id: number;
	username: string;
    user_img: string;
	location: string;
	img: string;
	desc: string;
	likes: 
		{
			user_id: number;
		}[];
	comments: 
		{
			user_id: number;
			username: string;
			msg: string;
		}[];
};

declare type AllPostResponse = {
	status: string;
	message: string;
	data: Post[];
};