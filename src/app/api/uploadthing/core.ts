import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	imageUploader: f({ image: { maxFileSize: "16MB" } })
		.middleware(async ({ req }) => {
			const user = await auth(req);
			if (!user) throw new Error("Unauthorized");
			return { userId: user.id };
		}).onUploadComplete(async ({ metadata, file }) => { }),
	photosUploader: f({ image: { maxFileSize: "16MB", maxFileCount: 3 } })
		.middleware(async ({ req }) => {
			const user = await auth(req);
			if (!user) throw new Error("Unauthorized");
			return { userId: user.id };
		}).onUploadComplete(async ({ metadata, file }) => { }),

} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;