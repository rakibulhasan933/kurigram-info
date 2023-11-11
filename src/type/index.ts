
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