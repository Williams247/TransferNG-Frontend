interface ImageFileSchema {
  url: string;
  publicId: string;
}

export interface FormSubmit {
  licenses: ImageFileSchema;
  diploma: ImageFileSchema;
  otherTraining: ImageFileSchema;
}
