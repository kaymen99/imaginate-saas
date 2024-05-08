declare type TransformationTypeKey = "restore" | "fill" | "remove" | "recolor";

declare type Transformations = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
};

declare type TransformImageProps = {
  image: any;
  type: string;
  title: string;
  transforamtionConfig: Transformations | null;
  isTransforming: boolean;
  setIsTransforming: React.Dispatch<React.SetStateAction<boolean>>;
};

declare type IImage = {
  width?: string;
  height?: string;
  publicId: string;
  config: object;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  secureURL: string;
};

// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

// ====== USER PARAMS
declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};
