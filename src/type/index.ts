
export interface ServicesIProps {
	thumbnails: string,
	photos: string[],
	title: string,
	category: string,
	description: string,
};
export interface ServicesProps {
	id: string,
	thumbnails: string,
	photos: string[],
	title: string,
	category: string,
	description: string,
}
export interface UpdateIProps {
	id: string,
	thumbnails: string,
	photos: string[],
	title: string,
	description: string,
}
export interface IdProps {
	id: string,
};
export interface ParamsIProps {
	params: IdProps
};
export interface ReviewProps {
	productId: string,
	userId: string,
	userName: string,
	photoUrl: string,
	comment: string,
}
export interface ReviewIProps {
	id: string,
	productId: string,
	userId: string,
	userName: string,
	photoUrl: string,
	comment: string,
}
export interface ReviewI {
	id: string,
}
export interface SearchIProps {
	search: string,
}
export interface PasswordIProps {
	id: string,
	password: string,
};
export interface UserProps {
	id?: string,
	username: string,
	password: string,
	phone: string,
	photoUrl: string,
}
export interface UserIProps {
	id: string,
	username: string,
	password: string,
	phone: string,
	photoUrl: string,
}