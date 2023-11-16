
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
export interface TeacherProps {
	productId: string,
	name: string,
	image: string,
	department: string,
	phone: string,
}
export interface TeacherIProps {
	id: string,
	productId: string,
	name: string,
	image: string,
	department: string,
	phone: string,
}
export interface MenuProps {
	productId: string,
	name: string,
	price: string,
	image: string
}
export interface MenuIProps {
	id: string,
	productId: string,
	name: string,
	price: string,
	image: string
}
export interface DoctorProps {
	name: string,
	image: string,
	productId: string,
	department: string,
	phone: string,
}
export interface DoctorIProps {
	id: string,
	name: string,
	productId: string,
	image: string,
	department: string,
	phone: string,
}